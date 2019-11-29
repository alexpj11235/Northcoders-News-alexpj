import React, { Component } from "react";
import Voter from "./Voter";
import DeleteComment from "./DeleteComment";

class CommentCard extends Component {
  state = {
    post: 0
  };
  componentDidMount() {}

  render() {
    const createdOn = this.props.comment.created_at
      ? `posted on ${this.props.comment.created_at.slice(0, 10)}`
      : "posted moments ago";
    const createdAt = this.props.comment.created_at
      ? `at ${this.props.comment.created_at.slice(11, 16)}`
      : "";

    return (
      <div className="CommentCard">
        <Voter
          id={this.props.comment.comment_id}
          votes={this.props.comment.votes}
          type="comments"
        />
        <br />
        <h5>
          {createdOn} {createdAt} by {this.props.comment.author}
        </h5>

        <h4>{this.props.comment.body}</h4>

        {this.props.comment.comment_id === 999 ? (
          <h4>(refresh to delete and vote)</h4>
        ) : (
          <div></div>
        )}

        <DeleteComment
          id={this.props.comment.comment_id}
          HandleDelete={this.props.HandleDelete}
          username={this.props.comment.author}
        />
      </div>
    );
  }
}

export default CommentCard;
