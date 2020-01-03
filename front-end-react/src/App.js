import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import {Provider } from "react-redux";
import store from './store';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjecTask from './components/projectBoard/projectTask/AddProjecTask';
import UpdateProjectTask from './components/projectBoard/projectTask/UpdateProjectTask';
import Landing from './components/layout/Landing';
import Register from './components/userManagement/Register';
import Login from './components/userManagement/Login';
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from './actions/types';
import {logout} from "./actions/securityAction";
import SecuredRoute from "./securityUtils/secureRoute";

const jwtToken = localStorage.jwtToken

if (jwtToken) {
  setJWTToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });
  const currentTime = Date.now()/1000
  if (decoded_jwtToken.exp < currentTime) {
    // handle logout
    store.dispatch(logout())
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        {
          // Public routes
        }
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        {
          // Private routes
        }
        <Switch>
        <SecuredRoute exact path="/dashboard" component={Dashboard}/>
        <SecuredRoute exact path="/addProject" component={AddProject}/>
        <SecuredRoute exact path="/updateProject/:id" component={UpdateProject}/>
        <SecuredRoute exact path="/projectBoard/:id" component={ProjectBoard}/>
        <SecuredRoute exact path="/addProjectTask/:id" component={AddProjecTask}/>
        <SecuredRoute exact path="/updateProjectTask/:backlog_id/:projectTask_id" component={UpdateProjectTask}/>
        {
        //  <Footer/>
        }
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
