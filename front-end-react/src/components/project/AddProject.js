import React, { Component } from 'react'

export default class AddProject extends Component {
    constructor(){
        super()
        this.state={
            "projectName":"",
            "projectIdentifier":"",
            "description":"",
            "start_date":"",
            "end_date":""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const newProject = {
            "projectName":this.state.projectName,
            "projectIdentifier":this.state.projectIdentifier,
            "description":this.state.description,
            "start_date":this.state.start_date,
            "end_date":this.state.end_date
        };
        console.log(newProject);
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Project Form</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 pb-5">

                        <form onSubmit={this.onSubmit}>
                            <div className="card border-primary rounded-0">
                                <div className="card-header p-0">
                                    <div className="bg-primary text-white text-center py-2">
                                        <h3><i className="fas fa-project-diagram"></i> New Project</h3>
                                        <p className="m-0">Fill in the form to create new project.</p>
                                    </div>
                                </div>
                                <div className="card-body p-3">

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fas fa-file-signature"></i></div>
                                            </div>
                                            <input type="text" className="form-control" name="projectName"
                                            value={this.state.projectName}
                                            onChange={this.onChange} 
                                            placeholder="Project Name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fas fa-barcode"></i></div>
                                            </div>
                                            <input type="text" className="form-control" name="projectIdentifier"
                                            value={this.state.projectIdentifier}
                                            onChange={this.onChange}
                                            placeholder="Project Identifier" required/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="far fa-comment-alt"></i></div>
                                            </div>
                                            <textarea className="form-control" placeholder="Description" name="description"
                                            value={this.state.description}
                                            onChange={this.onChange} required></textarea>
                                        </div>
                                    </div>
                                
                                    <div className="form-group">
                                    <h6>Start Date</h6>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                            <input type="date" className="form-control" name="start_date"
                                            value={this.state.start_date}
                                            onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                    <h6>End Date</h6>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                            <input type="date" className="form-control" name="end_date" 
                                            value={this.state.end_date}
                                            onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <input type="submit" value="Create Project" className="btn btn-primary btn-block rounded-0 py-2"/>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
