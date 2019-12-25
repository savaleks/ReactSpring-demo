import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login-popup-wrap new_login_popup">
        <div className="login-popup-heading text-center">
          <h4>
            <i className="fa fa-lock" aria-hidden="true"></i> Login{" "}
          </h4>
        </div>

        <form id="loginMember" role="form" action="" method="post">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="user_id"
              placeholder="e-mail"
              name="user_id"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary login-popup-btn"
            name="submit"
            value="1"
          >
            Login
          </button>
        </form>
        <div className="form-group text-center">
          <a className="pwd-forget" href="#" id="open_forgotPassword">
            Forget Password
          </a>
        </div>
        <div className="text-center">
          Not registered yet?<a href="#">click here</a>
        </div>
      </div>
    );
  }
}

export default Login;
