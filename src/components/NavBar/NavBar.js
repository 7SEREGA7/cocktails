import React from 'react'
import {Link} from 'react-router-dom'
import withPages from '../../hoc/withPages'

import './NavBar.scss'

const NavBar = ({ initial, alcoholic, nonAlcoholic }) => {
	return (
		<div className="NavBar">
			<h1 className="title">Cocktail DB</h1>
			<nav className="menu">
				<Link className='menu-item' to='/' onClick={initial}>
					Home
				</Link>
				<Link className='menu-item' to='/alcoholic' onClick={alcoholic}> 
					Alcoholic
				</Link>
				<Link className='menu-item' to='/non_alcoholic' onClick={nonAlcoholic}> 
					Non Alcoholic
				</Link>
			</nav>
		</div>
	)
}

export default withPages(NavBar)