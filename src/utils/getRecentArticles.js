const articlesTest = [
  {
    id: 1,
    title: '文章标题',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, mollitia adipisci. Magnam assumenda quae sed! Voluptatum nisi, molestiae eaque molestias explicabo dolores adipisci voluptates beatae sit tempora vitae pariatur iure.',
    date: '2021-01-01',
    tags: ['tag1', 'tag2'],
    views: 10000,
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export const getRecentArticles = async () => {
//   await delay(1000);
//   return articlesTest;
// };

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
