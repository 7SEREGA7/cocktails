import React from 'react'
import CocktailItem from '../CocktailItem/CocktailItem'

import './CocktailsList.scss'

const CocktailsList = ({cocktails}) => {
  return (
    <ul className="CocktailsList">
  	  {cocktails.map((cocktail, index) => (
  	    <CocktailItem 
  	      key={`${index} ${cocktail.strDrink}`}
  	  	  cocktailName={cocktail.strDrink} 
  	  	  cocktailImg={cocktail.strDrinkThumb} />
  	  ))}
  	</ul>
  )
}

export default CocktailsList