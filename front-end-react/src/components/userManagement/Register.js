import React, { Component } from "react";
import { createNewUser } from "../../actions/securityAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.createNewUser(newUser, this.props.history);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container register-form">
        <div className="form">
          <div className="note">
            <p>This is a simpleRegister Form</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.firstName
                      })}
                      placeholder="First Name *"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.lastName
                      })}
                      placeholder="Last Name *"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("form-control", {
                        "is-invalid": errors.email
                      })}
                      placeholder="Email *"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.password
                      })}
                      placeholder="Your Password *"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.confirmPassword
                      })}
                      placeholder="Confirm Password *"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
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
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(mapStateToProps, { createNewUser })(Register);
