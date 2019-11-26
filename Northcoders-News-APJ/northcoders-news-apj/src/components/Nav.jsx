import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utilities/api";

class Nav extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.fetchTopics().then(({ topics }) => {
      this.setState({ topics });
      console.log(this.state.topics);
    });
  }

  render() {
    return (
      <div className="Nav">
        <h2>topics:</h2>
        {this.state.topics.map(topic => {
          return (
            <h3 key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Nav;
