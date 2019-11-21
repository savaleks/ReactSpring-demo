import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Backlog from './Backlog';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogAction"
import ProjectTask from './projectTask/ProjectTask';


class ProjectBoard extends Component {

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getBacklog(id)
    }

    render() {
        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog
        return (            
            <div className="container" id="projecttask"> 
                <div className="row">
                    <div className="container">
                    <Link to={`/addProjectTask/${id}`} className="btn btn-light border-primary mb-3">
                    <i className="fas fa-plus"> Create Project Task</i>
                    </Link>
                    </div>
                </div>
                <Backlog project_tasks={project_tasks}/>
            </div>
        )
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    backlog: state.backlog
})

export default connect(mapStateToProps, {getBacklog})(ProjectBoard);