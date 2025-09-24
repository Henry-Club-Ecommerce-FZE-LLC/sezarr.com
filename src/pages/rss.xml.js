import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Insurance Insights USA',
    description: 'Independent, practical insurance guides for Americans.',
    site: context.site,
    items: posts.map((p) => ({
      link: `/posts/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate
    }))
  });
}
