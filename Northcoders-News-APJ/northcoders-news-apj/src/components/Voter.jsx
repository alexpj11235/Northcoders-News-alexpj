import React, { Component } from "react";
import * as api from "../utilities/api";

class Voter extends Component {
  state = {
    voted: 0
  };

  handleClick = event => {
    const currentVotes = +this.state.voted + +event.target.name;

    this.setState({ voted: currentVotes });
    api.voteChanger(this.props.comment_id, this.state.voted, "comments");
  };

  render() {
    const votes = +this.props.votes + +this.state.voted;
    return (
      <div className="Voter">
        <button
          onClick={this.handleClick}
          name="1"
          disabled={this.state.voted > 0}
        >
          upvote
        </button>
        {votes}
        <button
          onClick={this.handleClick}
          name="-1"
          disabled={this.state.voted < 0}
        >
          downvote
        </button>
      </div>
    );
  }
}

export default Voter;
