import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                <div className="container">
                <a className="navbar-brand" href="#"> SAVALEKS.COM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarResponsive" aria-controls="navbarResponsive"
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">

                    <ul className="navbar-nav ml-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign In</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Log In</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
