import React, { Component } from 'react'

class ProjectTask extends Component {
    
    render() {

        const {project_task} = this.props;

        return (
            <div className="card border-dark">
            <div className="card-header text-left bg-light">
            <i className="fa fa-tag"> ID: {project_task.projectSequence}</i> >>>
            <i className="fa fa-star"> PRIORITY: {project_task.priority}</i>
            </div>
            <div className="card-body mb bg-light">
                <h5 className="card-title">{project_task.summary}</h5>
                <p className="card-text">{project_task.acceptanceCriteria}</p>
                <button type="button" className="btn btn-primary mb">View/Update</button>&nbsp;
                <button type="button" className="btn btn-primary mb">Delete</button>
            </div>
            </div>
        )
    }
}

export default ProjectTask;