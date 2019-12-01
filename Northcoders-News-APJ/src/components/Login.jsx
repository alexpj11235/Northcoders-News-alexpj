import React, { Component } from "react";

import * as api from "../utilities/api";

class Login extends Component {
  state = {
    userName: localStorage.getItem("user") || "",
    users: {},
    valid: null
  };

  /**
   * Set state ewhen the component has mounted
   */
  componentDidMount() {
    if (this.props.loginUser) {
      this.setState({ user: this.props.loginUser, valid: true });
    }
  }

  /**
   *
   */
  handleInput = event => {
    const { value } = event.target;
    this.setState({ userName: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .fetchUser(this.state.userName)
      .then(data => {
        this.props.HandleLogin(this.state.userName);
        localStorage.setItem("user", this.state.userName);
        this.setState({ valid: true });
        this.props.HandleLogin();
      })
      .catch(error => {
        if (error) {
          this.setState({ valid: false });
          this.setState({ userName: "" });
        }
      });
  };

  handleLogout = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div>
        {!this.state.valid === true ? (
          <div>
            {this.state.valid === false ? (
              <div>
                That's not a valid user! Please try again.(suggested jessjelly)
              </div>
            ) : (
              <h3>Login to post comments, vote, and much much more!</h3>
            )}

            <form id="login" onSubmit={this.handleSubmit}>
              username:
              <input
                required
                value={this.state.userName}
                type="text"
                onChange={this.handleInput}
              ></input>
              <button>Login</button>
            </form>
          </div>
        ) : (
          <div>
            Logged in as {this.state.userName}
            <form onSubmit={this.handleLogout}>
              <button>Logout</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
