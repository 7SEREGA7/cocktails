import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PageContent, {alcoholTypes} from '../PageContent/PageContent'
import {paths} from '../../paths/paths'

import './App.scss'

export default class App extends Component {

	render() {
		return (
			<div className="App">
				<NavBar />
				<Route exact path={paths.home} render={() => <PageContent alcoholType={alcoholTypes.cocktails} />} />
				<Route exact path={paths.alcoholic} render={() => <PageContent alcoholType={alcoholTypes.alcoholic} />} />
				<Route exact path={paths.nonAlcoholic} render={() => <PageContent alcoholType={alcoholTypes.nonAlcoholic} />} />
			</div>
			)
	}
}