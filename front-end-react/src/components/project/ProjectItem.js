import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteProject} from "../../actions/projectAction"

class ProjectItem extends Component {

    onDeleteClick = id => {
        this.props.deleteProject(id);
    }

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
                    <Link to={`/projectBoard/${project.projectIdentifier}`} className="btn btn-primary">Project Board</Link>&nbsp;
                    <Link to={`/updateProject/${project.projectIdentifier}`} className="btn btn-success"><i className="fas fa-pen"></i> Update</Link>&nbsp;
                    <a className="btn icon-btn btn-warning" onClick={this.onDeleteClick.bind(this, project.projectIdentifier)}>
                    <span><i className="fas fa-trash-alt"></i></span> Delete</a>
                </div>
                <div className="card-footer text-dark bg-light"><span className="badge badge-primary">
                   created {project.created_At} </span>
                </div>
            </div>
            
        )
    }
}

ProjectItem.propTypes = {
    deleteProject: PropTypes.func.isRequired
};

export default connect(null, {deleteProject})(ProjectItem)
