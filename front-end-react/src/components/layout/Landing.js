import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
    componentDidMount() {
        if (this.props.security.validToken) {
          this.props.history.push("/dashboard");
        }
      }
    render() {
        return (
            <div className="landing"><br/>
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Personal Project Management Tool</h1>
                        <h2 className="text-success">Create your own account to start project.</h2><br/>
                        
                            <Link to="/register" className="btn btn-lg btn-primary mr-2">Sign In</Link>
                    
                            <Link to="/login" className="btn btn-lg btn-success mr-2">Log In</Link>
                    </div>
                    </div><br/>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        )
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Landing);
