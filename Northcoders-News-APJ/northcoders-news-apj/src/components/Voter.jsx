import React, { Component } from "react";
import * as api from "../utilities/api";
import * as NCNLogo from "../Images/NCNLogo.jpg";
import * as UNCNLogo from "../Images/UpsideNCNLogo.jpg";

class Voter extends Component {
  state = {
    voted: 0
  };

  handleClick = event => {
    if (
      (this.state.voted < 1 && event.target.name === "1") ||
      (this.state.voted > -1 && event.target.name === "-1")
    ) {
      const currentVotes = +this.state.voted + +event.target.name;

      this.setState({ voted: currentVotes });
      api.voteChanger(this.props.id, +event.target.name, this.props.type);
    }
  };

  render() {
    const votes = +this.props.votes + +this.state.voted;

    return (
      <div className="Voter">
        {this.props.id === "new" ? (
          <div>refresh to delete and vote</div>
        ) : (
          <div></div>
        )}

        <div className="VoteBox">
          <div></div>
          <img
            className="DownVote"
            onClick={this.handleClick}
            name="-1"
            disabled={this.state.voted < 0 || this.props.id === "new"}
            src={UNCNLogo}
            alt="Downvote"
            width="30"
            height="30"
          />

          <h3 className="Votes">{votes}</h3>

          <img
            className="UpVote"
            onClick={this.handleClick}
            name="1"
            disabled={this.state.voted > 0 || this.props.id === "new"}
            src={NCNLogo}
            alt="Upvote"
            width="30"
            height="30"
          />
          <div></div>
        </div>
      </div>
    );
  }
}

export default Voter;
