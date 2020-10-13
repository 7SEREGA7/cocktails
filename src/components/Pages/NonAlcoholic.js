import React from 'react'
import axios from 'axios'
import CocktailsList from '../CocktailsList/CocktailsList'
import Loader from '../Loader/Loader'

export default class NonAlcoholic extends React.Component {

	state = {
		cocktails: [],
		isLoaded: false
	}

	async componentDidMount() {
		try {
			const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
			const cocktails = response.data.drinks
		    cocktails === undefined ? 
				this.setState({
			    	cocktails: [],
			      	isLoaded: true
			    }) :
			    this.setState({
			    	cocktails: cocktails,
			      	isLoaded: true
			    })
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div>
				{ this.state.isLoaded
		    		? <CocktailsList cocktails={this.state.cocktails} />
		    		: <Loader/>
		    	}
			</div>
		)
	}
}