import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import 'clsx';

const html = "<p>Jane writes about auto and homeowners insurance.</p>";

				const frontmatter = {"name":"Jane Doe","title":"Licensed Agent (P&C)","bio":"Jane is a licensed Property & Casualty agent with 10+ years helping drivers and homeowners choose the right coverage and save on premiums.","avatar":"/images/authors/jane-doe.jpg","credentials":["Licensed Property & Casualty Agent","Former carrier underwriter"],"sameAs":["https://www.linkedin.com/in/jane-doe","https://twitter.com/janedoe"]};
				const file = "C:/Mirza/Websites/Insurance/src/content/authors/jane-doe.md";
				const url = undefined;
				function rawContent() {
					return "\r\nJane writes about auto and homeowners insurance.\r\n";
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
