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
    });
  }

  render() {
    return (
      <div className="Nav">
        <div className="Topics">
          <div></div>
          {this.state.topics.map(topic => {
            return (
              <h4 key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>/{topic.slug}</Link>
              </h4>
            );
          })}
          <div></div>
        </div>
      </div>
    );
  }
}

export default Nav;
