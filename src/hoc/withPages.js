import React from 'react'
import axios from 'axios'
import CocktailsList from '../components/CocktailsList/CocktailsList'
import Loader from '../components/Loader/Loader'


function withPages(Component) {

  return class WithPages extends React.Component {
  	state = {
			cocktails: [],
			isLoaded: false,
			alcoholic: 'cocktails'
		}

		async componentDidMount() {
			try {
				const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
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

		async	componentDidUpdate(prevState, prevProps) {
			if(prevProps.alcoholic !== this.state.alcoholic) {
				this.setState({
					isLoaded: false
				})
				if(this.state.alcoholic === 'cocktails') {
					try {
						const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
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
				if(this.state.alcoholic === 'alcoholic') {
					try {
						const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
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
				if(this.state.alcoholic === 'nonAlcoholic') {
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
			}
		}

		componentWillUnmount() {
			this.setState({
				cocktails: []
			})
    }

		setInitialState = () => {
			this.setState({
				alcoholic: 'cocktails'
			})
		}

		setAlcoholicState = () => {
			this.setState({
				alcoholic: 'alcoholic'
			})
		}

		setNonAlcoholicState = () => {
			this.setState({
				alcoholic: 'nonAlcoholic'
			})
		}

		render() {
			return (
				<div>
					<Component 
						initial={this.setInitialState}
						alcoholic={this.setAlcoholicState}
						nonAlcoholic={this.setNonAlcoholicState}
					/>
					{ this.state.isLoaded
			    	? <CocktailsList cocktails={this.state.cocktails} />
			    	: <Loader/>
		    	}
				</div>
			)
		}
  }
}

export default withPages