const axios = require("axios");

exports.fetchTopics = () => {
  return axios
    .get("https://apj-nc-news.herokuapp.com/api/topics")
    .then(response => {
      return response.data;
    });
};

exports.fetchAllArticles = (topic, sort_by, order) => {
  const params = { params: { topic, sort_by, order } };
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
  return axios
    .patch(`https://apj-nc-news.herokuapp.com/api/${type}/${id}`, {
      inc_votes: vote
    })
    .then(response => {
      return response.data;
    });
};

exports.PostComment = (article_id, username = "tickle122", body) => {
  return axios
    .post(
      `https://apj-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username,
        body
      }
    )
    .then(response => {
      return response.data;
    });
};

exports.DeleteCom = id => {
  return axios.delete(`https://apj-nc-news.herokuapp.com/api/comments/${id}`);
};

exports.fetchUser = name => {
  console.log(name, "<<<name in util");
  return axios
    .get(`https://apj-nc-news.herokuapp.com/api/users/${name}`)
    .then(response => {
      return response.data;
    });
};
