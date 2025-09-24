import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import 'clsx';

const html = "<p>Short, friendly blurb for the author page.</p>";

				const frontmatter = {"name":"Editorial Team","title":"Staff Writers","bio":"Our U.S.-based editorial team researches insurance topics to help consumers make confident decisions. We fact-check, cite sources, and update guides regularly.","avatar":"/images/authors/editorial-team.jpg","credentials":["Insurance research and consumer advocacy","Editorial standards aligned with YMYL guidance"],"sameAs":["https://www.linkedin.com/company/"]};
				const file = "C:/Mirza/Websites/Insurance/src/content/authors/editorial-team.md";
				const url = undefined;
				function rawContent() {
					return "\r\nShort, friendly blurb for the author page.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
