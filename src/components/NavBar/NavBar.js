import React from 'react'
import {Link} from 'react-router-dom'
import {paths} from '../../paths/paths'
import './NavBar.scss'

const NavBar = () => {
	return (
		<div className="NavBar">
			<h1 className="title">Cocktail DB</h1>
			<nav className="menu">
				<Link className='menu-item' to={paths.home}>
					Home
				</Link>
				<Link className='menu-item' to={paths.alcoholic}> 
					Alcoholic
				</Link>
				<Link className='menu-item' to={paths.nonAlcoholic}> 
					Non Alcoholic
				</Link>
			</nav>
		</div>
	)
}

export default NavBar