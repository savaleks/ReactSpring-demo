import React, { Component } from 'react'

export default class ProjectBoard extends Component {
    render() {
        return (
            <div class="container" id="projecttask"> 
                <div class="row">
                    <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <div className="card border-info">
                        <div class="card-header bg-primary border-success">
                            TODO
                        </div>
                        <div class="card-header text-left bg-light border-success">PRIORITY</div>

                        <div class="card-body mb bg-light">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-primary mb">View/Update</button>&nbsp;
                            <button type="button" class="btn btn-primary mb">Delete</button>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div className="card border-warning">
                        <div class="card-header bg-warning border-success">
                            IN PROGRESS
                        </div>
                        <div class="card-header text-left bg-light border-success">PRIORITY</div>

                        <div class="card-body mb bg-light">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-primary mb">View/Update</button>&nbsp;
                            <button type="button" class="btn btn-primary mb">Delete</button>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div className="card border-success">
                        <div class="card-header bg-success border-success">
                            DONE
                        </div>
                        <div class="card-header text-left bg-light border-success">PRIORITY</div>

                        <div class="card-body mb bg-light">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-primary mb">View/Update</button>&nbsp;
                            <button type="button" class="btn btn-primary mb">Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        )
    }
}