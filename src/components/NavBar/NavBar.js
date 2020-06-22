import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavBar.scss'

export default class NavBar extends React.Component {
	render(props) {
		return (
			<div className="NavBar">
		    	<h1 className="title">Cocktail DB</h1>
				<nav className="menu">
					<NavLink className='menu-item' to='/' onClick={this.props.resetAlcoholicState}>Home</NavLink>
					<NavLink 
						className='menu-item' 
						to='/alcoholic' 
						onClick={this.props.showAlcoholic} > 
						Alcoholic
					</NavLink>
					<NavLink 
						className='menu-item' 
						to='/non_alcoholic'
						onClick={this.props.showNonAlcoholic} > 
						Non Alcoholic
					</NavLink>
				</nav>
			</div>
		)
	}
}