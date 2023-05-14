// read file async
import fs from 'fs';
import frontMatter from 'front-matter';

const getRecentArticles = async () => {
  const files = fs.readdirSync('./public/post');
  const articles = [];
  for (const file of files) {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(`./public/post/${file}`, 'utf-8');
      const { attributes } = frontMatter(content);
      articles.push({
        id: file.replace('.md', ''),
        ...attributes,
      });
    }
  }
  // 保存到本地，没有则创建
  fs.writeFileSync('./public/post/articles.json', JSON.stringify(articles));
};

getRecentArticles();

export { getRecentArticles };
