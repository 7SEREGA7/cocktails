import React from 'react'

import './CocktailInfo.scss'

const CocktailInfo = (props) => {
	return (
		<>
			<li>{props.cocktailName}</li>
		    <img src={props.cocktailImg} alt="..." />

		</>
	)
}

export default CocktailInfo