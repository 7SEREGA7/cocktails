import React from 'react'

import './CocktailItem.scss'

const CocktailItem = (props) => {
	return (
		<li>
			<span>{props.cocktailName}</span>
	    	<img src={props.cocktailImg} alt="..." />
		</li>
	)
}

export default CocktailItem