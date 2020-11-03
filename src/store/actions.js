import axios from 'axios';

import { FETCH_ALCOHOLIC, FETCH_NON_ALCOHOLIC, FETCH_COCKTAILS } from './types';

export const fetchCocktails = () => async dispatch => {
	try {
		const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
		dispatch({
			type: FETCH_COCKTAILS,
			payload: response.data.drinks
		});
	} catch (e) {
		console.log(e)
	}
};

export const fetchAlcoholic = () => async dispatch => {
	try {
		const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
		dispatch({
			type: FETCH_ALCOHOLIC,
			payload: response.data.drinks
		});
	} catch (e) {
		console.log(e)
	}
};

export const fetchNonAlcoholic = () => async dispatch => {
	try {
		const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
		dispatch({
			type: FETCH_NON_ALCOHOLIC,
			payload: response.data.drinks
		});
	} catch (e) {
		console.log(e)
	}
};