import React, { Component } from "react";
import {createNewUser } from "../../actions/securityAction";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";

class Register extends Component {

  constructor(){
    super();
    this.state = {
      email:"",
      firstName:"",
      lastName:"",
      password:"",
      confirmPassword:"",
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      email:this.state.email,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      password:this.state.password,
      confirmPassword:this.state.confirmPassword
    }
    this.props.createNewUser(newUser, this.props.history);
  }

  render() {
    return (
      <div className="container register-form">
        <div className="form">
          <div className="note">
            <p>This is a simpleRegister Form</p>
          </div>
        <form onSubmit = {this.onSubmit}>
        <div className="form-content">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name *"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name *"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password *"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-info btn-lg mt-4" />
      </div>
        </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect (mapStateToProps, {createNewUser})(Register);
