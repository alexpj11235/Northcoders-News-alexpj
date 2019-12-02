import React, { Component } from "react";
import * as api from "../utilities/api";

import Nav from "./Nav";
import { Link } from "@reach/router";
import Voter from "./Voter";

import Login from "./Login";

class Home extends Component {
  state = {
    articles: [],
    topic: [],
    isLoading: true,
    OptionsHide: true,
    sort_by: "created_at",
    order: "desc",
    user: "",
    recent: false,
    descending: false
  };

  componentDidMount() {
    this.setState({ user: this.context });
    api.fetchAllArticles().then(({ articles }) => {
      this.setState({
        articles,
        isLoading: false,
        recent: true,
        descending: true
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.topic !== prevProps.topic ||
      this.state.sort_by !== prevState.sort_by ||
      this.state.order !== prevState.order
    ) {
      api
        .fetchAllArticles(
          this.props.topic,
          this.state.sort_by,
          this.state.order
        )
        .then(({ articles }) => {
          this.setState({ articles });
        });
    }
  }

  OptionsClick = () => {
    this.setState({ OptionsHide: !this.state.OptionsHide });
  };

  HandleChange = event => {
    if (event.target.name === "group1") {
      this.setState({ sort_by: event.target.value, recent: false });
      if (event.target.value === "created_at") {
        this.setState({ recent: true });
      }
    } else {
      this.setState({ order: event.target.value, descending: false });
      if (event.target.value === "desc") {
        this.setState({ descending: true });
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Link to={`/`}>
              <h1 className="NCnews">NorthCoders News Home</h1>
            </Link>
            <Login
              loginUser={this.props.loginUser}
              HandleLogin={this.props.HandleLogin}
            />
            <Nav />
            <h1>Articles</h1>
            <button onClick={this.OptionsClick}>Sort options</button>
            <br />
            {this.state.OptionsHide ? (
              <div />
            ) : (
              <form>
                <p>sort articles by:</p>
                <fieldset id="group1" className="Sorts">
                  comment count:{" "}
                  <input
                    onChange={this.HandleChange}
                    type="radio"
                    name="group1"
                    value="comment_count"
                  />
                  <br />
                  most recent:{" "}
                  <input
                    checked={this.state.recent}
                    onChange={this.HandleChange}
                    type="radio"
                    name="group1"
                    value="created_at"
                  />
                  <br />
                  author:{" "}
                  <input
                    onChange={this.HandleChange}
                    type="radio"
                    name="group1"
                    value="author"
                  />
                  <br />
                  votes:{" "}
                  <input
                    onChange={this.HandleChange}
                    type="radio"
                    name="group1"
                    value="votes"
                  />
                </fieldset>
                <br />
                <br />
                order:
                <fieldset id="group2" className="Sorts">
                  ascending:{" "}
                  <input
                    onChange={this.HandleChange}
                    type="radio"
                    name="group2"
                    value="asc"
                  />
                  descending:{" "}
                  <input
                    checked={this.state.descending}
                    onChange={this.HandleChange}
                    type="radio"
                    name="group2"
                    value="desc"
                  />
                </fieldset>
              </form>
            )}

            <h3>Click title for individual article page with comments</h3>
            {this.state.articles.map(article => {
              const createdOn = article.created_at.slice(0, 10);
              const createdAt = article.created_at.slice(11, 16);
              return (
                <div key={article.article_id} className="HomeArticle">
                  <h2>
                    <Link
                      className="ArticleLink"
                      to={`/articles/${article.article_id}`}
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <h4>
                    posted on {createdOn} at {createdAt} by {article.author}{" "}
                    <br /> comment-count:
                    {article.comment_count}
                  </h4>
                  <Voter
                    id={article.article_id}
                    votes={article.votes}
                    type="articles"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
