import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container"><br/>
                <h1>PROJECTS</h1>
                <div className="row">  
                    <button type="button" class="btn float-left btn-lg btn-outline-primary">
                    <i class="fas fa-plus"></i> Add New Project</button>
                </div><br/><hr/>
                <ProjectItem />
            </div>
        )
    }
}
