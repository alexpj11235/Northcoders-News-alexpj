import React, { Component } from "react";
import Context from "./components/UserContext";

import { Router, Link } from "@reach/router";

import Home from "./components/Home";
import Article from "./components/Article";
import { UserProvider } from "./components/UserContext";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    loggedIn: false
  };

  HandleLogin = event => {
    event.preventDefault();
    console.dir("clicking");
    console.dir(event.target, "<<<<<<<<event target in app");
    // this.setState({ username: this.event.target.value });
  };

  render() {
    return (
      <UserProvider value={this.state}>
        <div className="App">
          <Router>
            <Home HandleLogin={this.HandleLogin} path="/" />
            <Home HandleLogin={this.HandleLogin} path="/topics/:topic" />
            <Article path="/articles/:article_id" />
          </Router>
        </div>
      </UserProvider>
    );
  }
}

export default App;
