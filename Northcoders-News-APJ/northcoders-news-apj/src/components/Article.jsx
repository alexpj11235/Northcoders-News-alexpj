import React, { Component } from "react";
import * as api from "../utilities/api";
import { Link } from "@reach/router";
import CommentCard from "./CommentCard";
import Voter from "./Voter";
import PostComment from "./PostComment";

class Article extends Component {
  state = { article: {}, comments: [], isLoading: true };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then(({ article }) => {
      this.setState({ article });
    });
    api.fetchCommentsByArticleId(this.props.article_id).then(({ comments }) => {
      // console.log(comments, "comments in artivle");
      this.setState({ comments, isLoading: false });
    });
  }

  updateState = (commentString, username) => {
    const comment = {
      comment_id: 999,
      body: commentString,
      author: username,
      created_at: false,
      votes: 0
    };

    this.setState({ comments: [comment, ...this.state.comments] });
  };

  HandleDelete = id => {
    this.setState({
      comments: this.state.comments.filter(comment => {
        return comment.comment_id !== id;
      })
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Link to={`/topics/${this.state.article.topic}`}>
              back to {this.state.article.topic}
            </Link>
            <h1>{this.state.article.title}</h1>

            <Voter
              id={this.state.article.article_id}
              votes={this.state.article.votes}
              type="articles"
            />
            <PostComment
              article_id={this.state.article.article_id}
              updateState={this.updateState}
            />
            <p>{this.state.article.body}</p>
            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  HandleDelete={this.HandleDelete}
                  key={comment.comment_id}
                  comment={comment}
                ></CommentCard>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Article;