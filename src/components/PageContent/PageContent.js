import React from "react";
import CocktailsList from '../CocktailsList/CocktailsList'
import { connect } from "react-redux";
import { fetchCocktails, fetchAlcoholic, fetchNonAlcoholic,  } from "../../store/actions";


class PageContent extends React.Component {

	componentDidMount() {
		const { fetchCocktails, fetchAlcoholic, fetchNonAlcoholic } = this.props
		switch(this.props.alcoholType) {
			case 'nonAlcoholic':
				fetchNonAlcoholic()
			break;
			case 'alcoholic':
				fetchAlcoholic()
			break;
			default:
				fetchCocktails()
		}
	}

	render() {
		const { drinks } = this.props
		return (
			<div>
				<CocktailsList cocktails={drinks} /> 
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	drinks: state.drinks,
});

const mapDispatchToProps = { fetchCocktails, fetchAlcoholic, fetchNonAlcoholic,  };

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);

export const alcoholTypes = {
	nonAlcoholic: 'nonAlcoholic',
	alcoholic: 'alcoholic',
	cocktails: 'cocktails'
}