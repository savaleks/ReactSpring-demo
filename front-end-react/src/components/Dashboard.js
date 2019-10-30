import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem'
import ProjectButton from './project/ProjectButton'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container"><br/>
                <h1>PROJECTS</h1>
                <div className="row">  
                    <ProjectButton/>
                </div><br/><hr/>
                <ProjectItem />
            </div>
        )
    }
}
