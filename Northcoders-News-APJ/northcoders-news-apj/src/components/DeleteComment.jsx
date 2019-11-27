import React, { Component } from "react";
import * as api from "../utilities/api";

class DeleteComment extends Component {
  HandleClick = () => {
    api.DeleteCom(this.props.id);
    this.props.HandleDelete(this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.HandleClick} disabled={this.props.id === 999}>
          Delete comment
        </button>
      </div>
    );
  }
}

export default DeleteComment;
