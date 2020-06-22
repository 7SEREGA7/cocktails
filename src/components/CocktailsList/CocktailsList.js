import React from 'react'
import { Link } from 'react-router-dom';
import CocktailInfo from '../CocktailInfo/CocktailInfo'

import './CocktailsList.scss'

const CocktailsList = (props) => {
	return (
		<ul className="CocktailsList">
	        {props.cocktails.map((cocktail, index) => (
	         	<Link className="link" to='cocktail:info' key={index}>
		         	<CocktailInfo 
		         		cocktailName={cocktail.strDrink} 
		         		cocktailImg={cocktail.strDrinkThumb} />
	          	</Link>
	        ))}
	    </ul>
	)
}

export default CocktailsList