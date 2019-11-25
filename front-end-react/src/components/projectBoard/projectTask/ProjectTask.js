import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {deleteProjectTask} from "../../../actions/backlogAction";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ProjectTask extends Component {

    onDeleteClick(backlog_id, projectTask_id){
        this.props.deleteProjectTask(backlog_id, projectTask_id)
    }
    
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
                <Link to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} type="button" className="btn btn-primary mb">View/Update</Link>&nbsp;
                <button type="button" className="btn btn-primary mb"
                 onClick={this.onDeleteClick.bind(this, project_task.projectIdentifier, project_task.projectSequence)}>Delete</button>
            </div>
            </div>
        )
    }
}

ProjectTask.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired
}

export default connect(null, {deleteProjectTask})(ProjectTask);