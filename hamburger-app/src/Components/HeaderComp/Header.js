import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
import GetStartedButton from './GetStartedButton';

class Header extends Component {
	render() {
		//functions here

		return (
			<header className="headerImg">
				<BurgerMenu />
				<p>Find Your Favourite</p>
				<h1>RECIPES</h1>
				<GetStartedButton />
			</header>
		);
	}
}

export default Header;
