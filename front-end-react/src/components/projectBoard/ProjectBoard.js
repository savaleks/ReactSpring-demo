import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class ProjectBoard extends Component {
    render() {
        const {id} = this.props.match.params;
        return (            
            <div className="container" id="projecttask"> 
                <div className="row">
                    <div className="container">
                    <Link to={`/addProjectTask/${id}`} className="btn btn-light border-primary mb-3">
                    <i className="fas fa-plus"> Create Project Task</i>
                </Link>
                <div className="row">
                    <div className="col-md-4">
                    <div className="card border-info">
                        <div className="card-header bg-primary border-success">
                            TODO
                        </div>
                        <div className="card-header text-left bg-light border-success">PRIORITY</div>

                        <div className="card-body mb bg-light">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn btn-primary mb">View/Update</button>&nbsp;
                            <button type="button" className="btn btn-primary mb">Delete</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-warning">
                        <div className="card-header bg-warning border-success">
                            IN PROGRESS
                        </div>
                        <div className="card-header text-left bg-light border-success">PRIORITY</div>

                        <div className="card-body mb bg-light">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn btn-primary mb">View/Update</button>&nbsp;
                            <button type="button" className="btn btn-primary mb">Delete</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-success">
                        <div className="card-header bg-success border-success">
                            DONE
                        </div>
                        <div className="card-header text-left bg-light border-success">PRIORITY</div>

                        <div className="card-body mb bg-light">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn btn-primary mb">View/Update</button>&nbsp;
                            <button type="button" className="btn btn-primary mb">Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        )
    }
}