import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityAction";

class Header extends Component {

    logout() {
        this.props.logout();
        window.location.href = "/";
    }

    render() {

        const {validToken, user} = this.props.security

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                <i className="fas fa-user-circle mr-1"/>{user.firstName}</Link>
            </li>
            <li className="nav-item">
                <Link to="/logout" onClick={this.logout.bind(this)} className="nav-link">Logout</Link>
            </li>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <li className="nav-item active">
                <Link to="/" className="nav-link">Home
                    <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Log In</Link>
            </li>
            </div>
        )

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                <div className="container">
                <Link to="/" className="navbar-brand"> SAVALEKS.COM</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarResponsive" aria-controls="navbarResponsive"
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">

                    <ul className="navbar-nav ml-auto">
                    {headerLinks}
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect (mapStateToProps, {logout})(Header);
