import React, { Component } from 'react';

export default class ProjectItem extends Component {
    render() {
        const {project} = this.props;
        
        return (
            
            <div className="card text-center">
                <div className="card-header text-white bg-info">
                    {project.projectIdentifier}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href="#" className="btn btn-primary">Project Board</a>&nbsp;
                    <a href="#" className="btn btn-success"><i className="fas fa-pen"></i> Update</a>&nbsp;
                    <a className="btn icon-btn btn-warning" href="#">
                    <span><i className="fas fa-trash-alt"></i></span> Delete</a>
                </div>
                <div className="card-footer text-dark bg-light"><span className="badge badge-primary">
                    2 days ago</span>
                </div>
            </div>
            
        )
    }
}
