import MarkdownIt from 'markdown-it';
import markdownItKatex from 'markdown-it-katex';
import frontMatter from 'markdown-it-front-matter';

import { createStarryNight, common } from '@wooorm/starry-night';
import { toHtml } from 'hast-util-to-html';

import 'github-markdown-css';

const starryNight = await createStarryNight(common);

// init
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (value, lang) {
    const scope = starryNight.flagToScope(lang);

    return toHtml({
      type: 'element',
      tagName: 'pre',
      properties: {
        className: scope
          ? [
              'highlight',
              'highlight-' + scope.replace(/^source\./, '').replace(/\./g, '-'),
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
md.use(frontMatter);

const MdRender = async (url) => {
  const res = await fetch(url);
  const text = await res.text();
  return md.render(text);
};

export default MdRender;
