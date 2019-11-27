import React, { Component } from "react";
import * as api from "../utilities/api";

class Voter extends Component {
  state = {
    voted: 0
  };

  handleClick = event => {
    const currentVotes = +this.state.voted + +event.target.name;

    this.setState({ voted: currentVotes });
    api.voteChanger(this.props.id, +event.target.name, this.props.type);
  };

  render() {
    const votes = +this.props.votes + +this.state.voted;
    return (
      <div className="Voter">
        <button
          onClick={this.handleClick}
          name="1"
          disabled={this.state.voted > 0 || this.props.id === 999}
        >
          upvote
        </button>
        {votes}
        <button
          onClick={this.handleClick}
          name="-1"
          disabled={this.state.voted < 0 || this.props.id === 999}
        >
          downvote
        </button>
      </div>
    );
  }
}

export default Voter;
