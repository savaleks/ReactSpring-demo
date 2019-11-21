import React, { Component } from 'react'
import ProjectTask from './projectTask/ProjectTask'

class Backlog extends Component {
    render() {
        const {project_tasks} = this.props
        const tasks = project_tasks.map(project_task => (
            <ProjectTask key={project_task.id} project_task = {project_task}/>
        ))
        return (
            <div className="row">
                    <div className="col-md-4">
                    <div>
                        <div className="card-header bg-primary border-success">
                            TODO
                        </div><br/>
                        {tasks}
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-warning">
                        <div className="card-header bg-warning border-success">
                            IN PROGRESS
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-success">
                        <div className="card-header bg-success border-success">
                            DONE
                        </div>
                        
                        </div>
                    </div>
                </div>
        )
    }
}

export default Backlog;