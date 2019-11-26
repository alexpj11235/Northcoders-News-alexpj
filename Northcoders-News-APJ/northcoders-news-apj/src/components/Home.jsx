import React, { Component } from "react";
import * as api from "../utilities/api";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "@reach/router";
import Voter from "./Voter";

class Home extends Component {
  state = {
    articles: [],
    topic: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchAllArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) {
      api.fetchAllArticles(this.props.topic).then(({ articles }) => {
        this.setState({ articles });
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Header className="Header" />
            <Nav className="Header" />
            {this.state.articles.map(article => {
              return (
                <h3 key={article.article_id} className="HomeArticle">
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                  <h4>
                    author: {article.author} <br /> comment count:
                    {article.comment_count}
                  </h4>
                  <Voter
                    id={article.article_id}
                    votes={article.votes}
                    type="articles"
                  />
                  <br />
                </h3>
              );
            })}
            }
          </div>
        )}
      </div>
    );
  }
}

export default Home;
