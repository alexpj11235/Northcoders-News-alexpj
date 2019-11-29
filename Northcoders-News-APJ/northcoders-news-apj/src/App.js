import React, { Component } from "react";

import { Router } from "@reach/router";

import Home from "./components/Home";
import Article from "./components/Article";

import "./App.css";

class App extends Component {
  state = {
    username: ""
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({ username: localStorage.getItem("user") });
    }
  }

  HandleLogin = value => {
    this.setState({ username: value });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Home
            loginUser={this.state.username}
            HandleLogin={this.HandleLogin}
            path="/"
          />
          <Home
            loginUser={this.state.username}
            HandleLogin={this.HandleLogin}
            path="/topics/:topic"
          />
          <Article
            loginUser={this.state.username}
            HandleLogin={this.HandleLogin}
            path="/articles/:article_id"
          />
        </Router>
        {/* <ErrorPage default /> */}
      </div>
    );
  }
}

export default App;
