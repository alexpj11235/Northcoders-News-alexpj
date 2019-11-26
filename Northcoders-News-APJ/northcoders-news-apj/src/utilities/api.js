const axios = require("axios");

exports.fetchTopics = () => {
  return axios
    .get("https://apj-nc-news.herokuapp.com/api/topics")
    .then(response => {
      return response.data;
    });
};

exports.fetchAllArticles = props => {
  const params = { params: { topic: props } };
  console.log(params, " params in fetch");
  return axios
    .get("https://apj-nc-news.herokuapp.com/api/articles", params)
    .then(response => {
      return response.data;
    });
};

exports.fetchArticleById = article_id => {
  return axios
    .get(`https://apj-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(response => {
      return response.data;
    });
};

exports.fetchCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://apj-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(response => {
      return response.data;
    });
};

exports.voteChanger = (id, vote, type) => {
  const params = { params: { inc_votes: vote } };
  console.log(vote, "<<<<<<<<<vote");
  return axios
    .patch(`https://apj-nc-news.herokuapp.com/api/${type}/${id}`, params)
    .then(response => {
      return response.data;
    });
};
