import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import DashBoard from "./components/dashboard/DashBoard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
