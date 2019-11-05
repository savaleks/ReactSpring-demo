import React, { Component } from 'react';
import ProjectItem from './project/ProjectItem';
import ProjectButton from './project/ProjectButton';
import {connect} from "react-redux";
import {getProjects} from "../actions/projectAction";
import PropTypes from "prop-types";

class Dashboard extends Component {

    componentDidMount(){
        this.props.getProjects();
    }

    render() {

        const {projects} = this.props.project

        return (
            <div className="container"><br/>
                <h1>PROJECTS</h1>

                <div className="row">  
                    <ProjectButton/>
                </div><br/><hr/>

                <div>
                    {projects.map(project => (
                        <ProjectItem key={project.id} project={project}/>
                    ))}
                </div><br/>
            </div>
        )
    }
}

Dashboard.propTypes = {
    project:PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    project: state.project,

})

export default connect(mapStateToProps, {getProjects}) (Dashboard)