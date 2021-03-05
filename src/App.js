import React, { Component } from 'react';
import Navbar from "./components/navbar";
import HomePage from "./components/Pages/homePage";
import AboutPage from "./components/Pages/aboutPage";
import NotFoundPage from "./components/Pages/notFoundPage";
import ProjectsPage from "./components/Pages/projectsPage";
import Credits from "./components/Pages/credits";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="App w-100">
          <Navbar/>
          <div class='mainContainer'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/projects' component={ProjectsPage} />
              <Route path='/about' component={AboutPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Credits/>
      </div>
    )
  }
}

