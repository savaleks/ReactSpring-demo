import React, { Component } from 'react'

export default class ProjectItem extends Component {
    render() {
        return (
            
            <div className="card text-center">
                <div className="card-header">
                    Project Identifier
                </div>
                <div className="card-body">
                    <h5 className="card-title">Project Name</h5>
                    <p className="card-text">Project description.</p>
                    <a href="#" className="btn btn-primary">Project Board</a>&nbsp;
                    <a href="#" className="btn btn-success">Update</a>&nbsp;
                    <a class="btn icon-btn btn-warning" href="#">
                    <span class="glyphicon btn-glyphicon glyphicon-minus img-circle text-warning"></span>Delete</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            
        )
    }
}
