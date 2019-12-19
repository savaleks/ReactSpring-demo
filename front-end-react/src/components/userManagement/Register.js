import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="container register-form">
        <div className="form">
          <div className="note">
            <p>This is a simpleRegister Form</p>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Email *"
                    value=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Password *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password *"
                    value=""
                  />
                </div>
              </div>
            </div>
            <button type="button" className="btnSubmit">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
