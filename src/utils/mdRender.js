import MarkdownIt from 'markdown-it';
import markdownItKatex from 'markdown-it-katex';
import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor';

// import { createStarryNight, common } from '@wooorm/starry-night';
import hljs from 'highlight.js';
import { toHtml } from 'hast-util-to-html';

import 'github-markdown-css';
import markdownItCodeCopy from 'markdown-it-code-copy';

const MdRender = async (url) => {
  // init
  // const starryNight = await createStarryNight(common);
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          const html = hljs.highlight(str, { language: lang }).value;
          return `<pre class="hljs"><code>${html}</code></pre>`;
          // return `<pre class="hljs"><code>${html}</code><div class="code-copy-button-wrapper"><i class="fa-solid fa-copy"></i></div></pre>`;
        } catch (__) {}
      }
      return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
    },
  });

  md.use(markdownItKatex);
  md.use(markdownItCodeCopy, {
    buttonStyle:
      'position: absolute; right: 0.3em; top: 0.6em; background: none; border: none; color: #aaa; display: flex; align-items: center; justify-content: center; width: 1.5em; height: 1.5em; cursor: pointer;',
    iconStyle: 'font-size: 15px',
  });

  let toc = [];
  md.use(markdownItTocAndAnchor, {
    anchorLink: false,
    tocCallback: function (tocMarkdown, tocArray, tocHtml) {
      for (const item of tocArray) {
        if (item.level === 2) {
          toc.push(item);
        }
      }
    },
  });

  const res = await fetch(url);
  // 去除frontmatter
  let text = await res.text();
  text = text.replace(/^---[\s\S]*?---/, '');
  return { html: md.render(text), toc };
};

export default MdRender;
