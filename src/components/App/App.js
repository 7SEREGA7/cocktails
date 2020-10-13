import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Home from '../Pages/Home'
import Alcoholic from '../Pages/Alcoholic'
import NonAlcoholic from '../Pages/NonAlcoholic'
import './App.scss'

export default class App extends Component {

  render() {
    return (
  	  <Router>
    	  <div className="App">
    		  <NavBar />
    	  </div>
    		<Switch>
    		  <Route exact path="/" component={Home} />
    		  <Route path="/alcoholic" component={Alcoholic} />
    		  <Route path="/non_alcoholic" component={NonAlcoholic} />
    		</Switch>
  	  </Router>
  	)
  }
}