import React, { Component } from 'react'
import ProjectTask from './projectTask/ProjectTask'

class Backlog extends Component {
    render() {
        const {project_tasks} = this.props
        const tasks = project_tasks.map(project_task => (
            <ProjectTask key={project_task.id} project_task = {project_task}/>
        ))
        let todoItem = []
        let inProgressItem = []
        let doneItem = []

        for(let i=0; i<tasks.length; i++){
            if (tasks[i].props.project_task.status === "TO_DO") {
                todoItem.push(tasks[i]);
            }
            if (tasks[i].props.project_task.status === "IN_PROGRESS") {
                inProgressItem.push(tasks[i]);
            }
            if (tasks[i].props.project_task.status === "DONE") {
                doneItem.push(tasks[i]);
            }
        }

        return (
            <div className="row">
                    <div className="col-md-4">
                    <div>
                        <div className="card-header bg-dark text-light border-success">
                            TODO
                        </div><br/>
                        {todoItem}
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div>
                        <div className="card-header bg-dark text-light border-success">
                            IN PROGRESS
                        </div><br/>
                        {inProgressItem}
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div>
                        <div className="card-header bg-dark text-light border-success">
                            DONE
                        </div><br/>
                        {doneItem}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Backlog;