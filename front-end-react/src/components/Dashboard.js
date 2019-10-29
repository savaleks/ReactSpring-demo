import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container"><br/>
                <h1>PROJECTS</h1>
                <div className="row">  
                    <button type="button" class="btn float-left btn-lg btn-outline-primary">Add New Project</button>
                </div><br/><br/>
                <ProjectItem />
            </div>
        )
    }
}
