import MarkdownIt from 'markdown-it';
import markdownItKatex from 'markdown-it-katex';
import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor';

import { createStarryNight, common } from '@wooorm/starry-night';
import { toHtml } from 'hast-util-to-html';

import 'github-markdown-css';

const MdRender = async (url) => {
  // init
  const starryNight = await createStarryNight(common);
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(value, lang) {
      const scope = starryNight.flagToScope(lang);

      return toHtml({
        type: 'element',
        tagName: 'pre',
        properties: {
          className: scope
            ? [
                'highlight',
                'highlight-' +
                  scope.replace(/^source\./, '').replace(/\./g, '-'),
              ]
            : undefined,
        },
        children: scope
          ? starryNight.highlight(value, scope).children
          : [{ type: 'text', value }],
      });
    },
  });

  md.use(markdownItKatex);

  let toc = [];
  md.use(markdownItTocAndAnchor, {
    anchorLink: false,
    tocCallback: function (tocMarkdown, tocArray, tocHtml) {
      console.log(tocArray);
      toc = tocArray;
    },
  });

  const res = await fetch(url);
  // 去除frontmatter
  let text = await res.text();
  text = text.replace(/^---[\s\S]*?---/, '');
  return { html: md.render(text), toc };
};

export default MdRender;
