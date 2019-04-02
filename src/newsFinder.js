const newsFinder = (news, aspect) => {
  return news.articles.map(article => article[aspect]);
};

module.exports = newsFinder;
