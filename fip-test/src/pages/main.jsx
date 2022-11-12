import React, {Component} from 'react'
import ProfileUpload from './ProfileUpload'
import Change from './Change';
import Login from './Login'
import Profile from './Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const main = () => {
  return (
    <div>
      <Router>
          <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/profile"><Profile/></Route>
          <Route exact path="/profileUpload"><ProfileUpload/></Route>
          <Route exact path="/change"><Change/></Route>
          </Switch>
      </Router>
    
    </div>
  )
}

export default main