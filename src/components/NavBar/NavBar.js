import React from 'react'
import {Link} from 'react-router-dom'

import './NavBar.scss'

export default class NavBar extends React.Component {
	render(props) {
		return (
			<div className="NavBar">
		  	<h1 className="title">Cocktail DB</h1>
				<nav className="menu">
					<Link className='menu-item' to='/'>
						Home
					</Link>
					<Link className='menu-item' to='/alcoholic'> 
						Alcoholic
					</Link>
					<Link className='menu-item' to='/non_alcoholic'> 
						Non Alcoholic
					</Link>
				</nav>
			</div>
			)
	}
}