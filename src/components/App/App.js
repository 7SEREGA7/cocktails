import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import CocktailsList from '../CocktailsList/CocktailsList'
// import CocktailInfo from '../CocktailInfo/CocktailInfo'
import NavBar from '../NavBar/NavBar'
import Loader from '../Loader/Loader'
import './App.scss';

export default class App extends Component {

	state = {
		cocktails: [],
		isLoaded: false,
		alcoholic: ''
	}

	resetAlcoholicState = () => {
		this.setState({
			alcoholic: ''
		})
	}

	showAlcoholic = () => {
		this.setState({
			alcoholic: true
		})
	}

	showNonAlcoholic = () => {
		this.setState({
			alcoholic: false
		})
	}

	async componentDidMount() {
		try {
			const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
			const cocktails = response.data.drinks

		    this.setState({
		    	cocktails: cocktails,
		      	isLoaded: true
		    })

		} catch (e) {
			console.log(e)
		}
	}

	async componentDidUpdate() {
		if (this.state.alcoholic === false) {
			try {
				const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
				const cocktails = response.data.drinks

			    this.setState({
			    	cocktails: cocktails,
			      	isLoaded: true
			    })
			} catch (e) {
				console.log(e)
			}
		}
		if (this.state.alcoholic) {
			try {
				const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
				const cocktails = response.data.drinks

			    this.setState({
			      	cocktails: cocktails,
			    	isLoaded: true
			    })
			} catch (e) {
				console.log(e)
			}
		}
		if (this.state.alcoholic === '') {
			try {
				const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
				const cocktails = response.data.drinks

			    this.setState({
			     	cocktails: cocktails,
			    	isLoaded: true
			    })
			} catch (e) {
				console.log(e)
			}
		}

	}

	render() {
	  return (
	    <div className="App">
	    	<Switch>
	    		<Route exact path="/" />
	    		<Route exact path="/cocktail" />
	    		{/* <Route path="/cocktail:info" component={CocktailInfo} /> */}
	    	</Switch>
	    	<NavBar 
	    		showAlcoholic={this.showAlcoholic} 
	    		showNonAlcoholic={this.showNonAlcoholic}
	    		resetAlcoholicState={this.resetAlcoholicState} />
	    	{ this.state.isLoaded
	    		? <CocktailsList cocktails={this.state.cocktails} />
	    		: <Loader/>
	    	}
	    	
	    	
	    </div>
	  );
	}
}