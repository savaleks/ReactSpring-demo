import React from 'react';
import {Link} from "react-router-dom"

export default function ProjectButton() {
    return (
        <React.Fragment>
            <Link to="/addProject" className="btn btn-lg btn-outline-primary">
            <i class="fas fa-plus"></i> Add New Project</Link>
        </React.Fragment>
    )
}
