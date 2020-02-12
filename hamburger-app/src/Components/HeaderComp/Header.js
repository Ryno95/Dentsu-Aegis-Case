import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';

class Header extends React.Component {
	render() {
		//functions here

		return (
			<header>
				<BurgerMenu />
				<p>Find Your Favourite</p>
				<h1>RECIPES</h1>
			</header>
		);
	}
}

export default Header;
