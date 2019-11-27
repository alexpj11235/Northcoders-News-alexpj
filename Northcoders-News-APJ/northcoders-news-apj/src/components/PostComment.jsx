import React, { Component } from "react";
import * as api from "../utilities/api";

class PostComment extends Component {
  state = {
    username: "grumpy19",
    comment: "",
    notHidden: true
  };

  Unhide = () => {
    this.setState({ notHidden: !this.state.notHidden });
  };

  handleInput = event => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    api.PostComment(
      this.props.article_id,
      this.state.username,
      this.state.comment
    );

    this.props.updateState(this.state.comment, this.state.username);
    this.setState({ notHidden: true });
  };

  render() {
    return (
      <div>
        {this.state.notHidden ? (
          <button onClick={this.Unhide}>Post a comment</button>
        ) : (
          <div />
        )}

        {this.state.notHidden ? (
          <div />
        ) : (
          <form onSubmit={this.handleSubmit}>
            comment :
            <textarea
              className="BigBox"
              name="BigBox"
              onChange={this.handleInput}
              type="text"
              id="content"
              height="500"
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default PostComment;
