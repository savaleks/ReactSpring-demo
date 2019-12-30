import React, { Component } from "react";
import { Link } from "react-router-dom";
import  PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {login} from "../../actions/securityAction"

class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const LoginRequest = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(LoginRequest);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  render() {

    const {errors} = this.state;

    return (
      <div className="login-popup-wrap new_login_popup">
        <div className="login-popup-heading text-center">
          <h4>
            <i className="fa fa-lock" aria-hidden="true"></i> Login{" "}
          </h4>
        </div>

        <form onSubmit = {this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className={classnames("form-control", {"is-invalid": errors.email})}
              placeholder="email"
              name="email"
              value = {this.state.email}
              onChange = {this.onChange}
            />
            {
              errors.email && (<div className="invalid-feedback">{errors.email}</div>)
            }
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames("form-control", {"is-invalid": errors.password})}
              placeholder="Password"
              name="password"
              value = {this.state.password}
              onChange = {this.onChange}
            />
            {
              errors.password && (<div className="invalid-feedback">{errors.password}</div>)
            }
          </div>
          <button
            type="submit"
            className="btn btn-primary login-popup-btn"
            name="submit"
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  security:state.security,
  errors: state.errors
})

export default connect(mapStateToProps, {login}) (Login);
