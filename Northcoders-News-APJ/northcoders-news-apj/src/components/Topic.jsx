import React, { Component } from "react";
import * as api from "../utilities/api";

class Topic extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.fetchAllArticles;
  }

  render() {
    return <div>This is a topic</div>;
  }
}

export default Topic;
