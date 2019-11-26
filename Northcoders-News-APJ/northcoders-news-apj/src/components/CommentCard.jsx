import React, { Component } from "react";
import Voter from "./Voter";

class CommentCard extends Component {
  componentDidMount() {}

  render() {
    const createdOn = this.props.comment.created_at.slice(0, 10);
    const createdAt = this.props.comment.created_at.slice(12, 16);

    return (
      <div className="CommentCard">
        <h5>
          posted on {createdOn} at {createdAt} by {this.props.comment.author}
        </h5>

        <h4>{this.props.comment.body}</h4>
        <Voter
          comment_id={this.props.comment.comment_id}
          votes={this.props.comment.votes}
          type="comments"
        />
      </div>
    );
  }
}

export default CommentCard;
