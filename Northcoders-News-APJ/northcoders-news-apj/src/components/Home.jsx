import React, { Component } from "react";
import * as api from "../utilities/api";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "@reach/router";
import Voter from "./Voter";
import UserContext from "./UserContext";

class Home extends Component {
  state = {
    articles: [],
    topic: [],
    isLoading: true,
    OptionsHide: true,
    sort_by: "created_at",
    order: "desc",
    user: ""
  };

  static contextType = UserContext;

  componentDidMount() {
    console.log(this.props, "<<<<<<<<<<home props");
    this.setState({ user: this.context });
    api.fetchAllArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
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
      this.setState({ sort_by: event.target.value });
    } else {
      this.setState({ order: event.target.value });
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <form id="login" onSubmit={this.props.HandleLogin}>
              username:
              <input type="text"></input>
              <button>Login</button>
            </form>
            <Header className="Header" />
            <Nav />
            <button onClick={this.OptionsClick}>Sort options</button>
            <br />
            {this.state.OptionsHide ? (
              <div />
            ) : (
              <form>
                <p>sort articles by:</p>
                <fieldset id="group1">
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
                <fieldset id="group2">
                  ascending:{" "}
                  <input
                    onChange={this.HandleChange}
                    type="radio"
                    name="group2"
                    value="asc"
                  />
                  descending:{" "}
                  <input
                    onChange={this.HandleChange}
                    type="radio"
                    name="group2"
                    value="desc"
                  />
                </fieldset>
              </form>
            )}
            {this.state.articles.map(article => {
              const createdOn = article.created_at.slice(0, 10);
              const createdAt = article.created_at.slice(11, 16);
              return (
                <div key={article.article_id} className="HomeArticle">
                  <h2>
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <h4>
                    posted on {createdOn} at {createdAt} by {article.author}{" "}
                    <br /> comment count:
                    {article.comment_count}
                  </h4>
                  <Voter
                    id={article.article_id}
                    votes={article.votes}
                    type="articles"
                  />
                  <br />
                </div>
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
