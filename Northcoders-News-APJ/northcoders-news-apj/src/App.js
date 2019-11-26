import React from "react";

import { Router, Link } from "@reach/router";

import Home from "./components/Home";
import Article from "./components/Article";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Home path="/topics/:topic" />
        <Article path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
