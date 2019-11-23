import React, { Component } from 'react'

class ProjectTask extends Component {
    
    render() {

        const {project_task} = this.props;
        let priorityString;
        let priorityClass;

        if (project_task.priority === 1) {
            priorityClass = "bg-danger text-light"
            priorityString = "HIGH"
        }
        if (project_task.priority === 2) {
            priorityClass = "bg-warning text-light"
            priorityString = "MEDIUM"
        }
        if (project_task.priority === 3) {
            priorityClass = "bg-info text-light"
            priorityString = "LOW"
        }

        return (
            <div className="card border-dark">
            <div className={`card-header text-left ${priorityClass}`}>
            <i className="fa fa-tag"></i> {project_task.projectSequence} ---
            PRIORITY: {priorityString}
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