import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";
import {addProjectTask} from "../../../actions/backlogAction";
import PropTypes from "prop-types";

class AddProjecTask extends Component {
    constructor(props){
        super(props)
        const {id} = this.props.match.params;
        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            priority: 0,
            dueDate: "",
            projectIdentifier: id,
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const newTask = {
            summary : this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status : this.state.status,
            priority : this.state.priority,
            dueDate : this.state.dueDate
        }
        this.props.addProjectTask(this.state.projectIdentifier, newTask, this.props.history)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {
        const {id} = this.props.match.params;
        const {errors} = this.state;
        return (
            <div className="container register-form">&nbsp;
                <div className="m-auto text-left">
                    <Link to={`/projectBoard/${id}`} className="btn btn-light border-primary">
                    <i className="fas fa-arrow-left"> Back to Project Board</i></Link>
                </div>
        
            <form onSubmit={this.onSubmit}>
                <div>&nbsp;</div>
                <div className="note">
                    <h3>Add/Update Project Task</h3>
                    <p>Project Name + Project Code</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" 
                                className={classnames("form-control", {"is-invalid":errors.summary})} 
                                placeholder="Project Task Summary *"
                                name="summary"
                                value={this.state.summary}
                                onChange={this.onChange}/>
                                {errors.summary && (<div className="invalid-feedback">{errors.summary}</div>)}
                            </div>
                            <div className="form-group">
                                <textarea type="text" className="form-control" 
                                name="acceptanceCriteria"
                                placeholder="Acceptance Criteria" 
                                value={this.state.acceptanceCriteria}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                            <label>Due Date</label>
                                <input type="date" className="form-control"
                                name="dueDate"
                                value={this.state.dueDate}
                                onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Select Priority (select one):</label>
                            <select className="form-control" name="priority" 
                            value={this.state.priority}
                            onChange={this.onChange}>
                              <option value = {0}>Select Priority</option>
                              <option value = {1}>High</option>
                              <option value = {2}>Medium</option>
                              <option value = {3}>Low</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Status (select one):</label>
                            <select className="form-control" name="status" value={this.state.status}
                            onChange={this.onChange}>
                              <option value="">Select Status</option>
                              <option value="TO_DO">TO DO</option>
                              <option value="IN_PROGRESS">IN PROGRESS</option>
                              <option value="DONE">DONE</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <input type="submit" className="btnSubmit"/>
                </div>
            </form>
        </div>
        );
    }
}

AddProjecTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {addProjectTask})(AddProjecTask)