import React, { Component } from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import DashBoard from "./components/dashboard/DashBoard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        
        <Switch>
        <Route path="/" component={DashBoard}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
