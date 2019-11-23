import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Backlog from './Backlog';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogAction"
import ProjectTask from './projectTask/ProjectTask';


class ProjectBoard extends Component {

    constructor(){
        super();
        this.state = {
            errors: {}
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getBacklog(id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {
        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        const {errors} = this.state

        let BoardContent;
        const boardAlgorithm = (errors, project_tasks) => {
            if (project_tasks.length < 1) {
                if (errors.projectNotFound) {
                    return(
                        <div className="alert alert-danger" role="alert">{errors.projectNotFound}</div>
                    )
                } else {
                    return(
                    <div className="alert alert-info" role="alert">No Project Tasks on this board.</div>
                    )}
            } else {
                return (
                    <Backlog project_tasks={project_tasks}/>
                )
            }
        }

        BoardContent = boardAlgorithm(errors, project_tasks)

        return (            
            <div className="container" id="projecttask"> 
                <div className="row">
                    <div className="container">
                    <Link to={`/addProjectTask/${id}`} className="btn btn-light border-primary mb-3">
                    <i className="fas fa-plus"> Create Project Task</i>
                    </Link>
                    </div>
                </div>
                {BoardContent}
            </div>
        )
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    backlog: state.backlog,
    errors: state.errors
})

export default connect(mapStateToProps, {getBacklog})(ProjectBoard);