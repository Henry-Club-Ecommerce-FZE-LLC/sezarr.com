import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

import { fileURLToPath } from 'url';
const dist = fileURLToPath(new URL('../dist', import.meta.url));

function walk(dir){
  const entries = readdirSync(dir);
  let files = [];
  for(const e of entries){
    const p = join(dir, e);
    const s = statSync(p);
    if(s.isDirectory()) files = files.concat(walk(p));
    else if(extname(p) === '.html') files.push(p);
  }
  return files;
}

function extractLinks(html){
  const links = [];
  const aTag = /<a\s+[^>]*href="([^"]+)"/gi;
  let m;
  while((m=aTag.exec(html))){
    links.push(m[1]);
  }
  return links.filter(h => h.startsWith('/') && !h.startsWith('//'));
}

const htmlFiles = walk(dist);
const set = new Set(htmlFiles.map(f => f.replace(dist, '').replace(/\\/g,'/')));
let broken = 0;
for(const f of htmlFiles){
  const html = readFileSync(f, 'utf8');
  const links = extractLinks(html);
  for(const h of links){
    // normalize to dist path
    const target = h.endsWith('/') ? join(dist, h, 'index.html') : join(dist, h);
    const alt = join(dist, h, 'index.html');
    try {
      statSync(target);
    } catch {
      try { statSync(alt); }
      catch {
        console.log('BROKEN', h, 'found in', f.replace(dist,''));
        broken++;
      }
    }
  }
}
if(broken>0){
  console.error(`Found ${broken} broken links`);
  process.exit(1);
}
console.log('No broken internal links.');
