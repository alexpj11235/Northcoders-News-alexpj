import React, { Component } from "react";
import * as api from "../utilities/api";

class DeleteComment extends Component {
  HandleClick = () => {
    api.DeleteCom(this.props.id);
    this.props.HandleDelete(this.props.id);
  };

  render() {
    const user = localStorage.getItem("user") || null;
    return (
      <div>
        <button
          className="DeleteButton"
          onClick={this.HandleClick}
          disabled={this.props.id === "new" || this.props.username !== user}
        >
          Delete comment
        </button>
      </div>
    );
  }
}

export default DeleteComment;
