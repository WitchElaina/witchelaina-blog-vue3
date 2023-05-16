// 按日期排序文章列表
const getArticlesByDate = (articles) => {
  return articles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

// 获取特定tag的文章
const getArticlesByTag = (articles, tag) => {
  return articles.filter((article) => {
    return article.tags.includes(tag);
  });
};

// 获取按目录分类获取文章
const getArticlesByCategory = (articles) => {
  const categories = {};
  articles.forEach((article) => {
    if (!categories[article.category]) {
      categories[article.category] = [];
    }
    categories[article.category].push(article);
  });
  return categories;
};

// 按年份归档文章
const getArticlesByYear = (articles) => {
  const years = {};
  articles.forEach((article) => {
    const year = new Date(article.date).getFullYear();
    if (!years[year]) {
      years[year] = [];
    }
    years[year].push(article);
  });
  return years;
};

export {
  getArticlesByDate,
  getArticlesByTag,
  getArticlesByCategory,
  getArticlesByYear,
};
