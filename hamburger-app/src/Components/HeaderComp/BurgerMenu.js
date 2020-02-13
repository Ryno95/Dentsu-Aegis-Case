import React, { Component } from 'react';

class BurgerMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSideBarOpen: false
		};
	}

	handleMenuButtonClick = () => {
		this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
	};

	render() {
		const isSideBarOpen = this.state.isSideBarOpen;
		const MenuLabels = [
			{ label: 'Home' },
			{ label: 'About' },
			{ label: 'Recipes' },
			{ label: 'Mobile App' },
			{ label: 'Contact' }
		];

		return (
			<div className="container">
				<div className="menu-button" onClick={this.handleMenuButtonClick}>
					<i className="fas fa-bars" />
				</div>
				<nav className={`nav ${isSideBarOpen ? 'show' : 'hide'}`}>
					<ul className="menu-list">
						{MenuLabels.map((labels) => (
							<li className="menu-items" key={labels.label}>
								{labels.label}
							</li>
						))}
					</ul>
				</nav>
			</div>
		);
	}
}

export default BurgerMenu;
