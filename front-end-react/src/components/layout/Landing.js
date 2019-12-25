import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Personal Project Management Tool</h1>
                        <h2>Create your own account to start project.</h2>
                        
                            <Link to="/register" className="btn btn-lg btn-primary mr-2">Sign In</Link>
                    
                            <Link to="/login" className="btn btn-lg btn-secondary mr-2">Log In</Link>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Landing;
