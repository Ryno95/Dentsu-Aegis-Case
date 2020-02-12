import React, { Component } from 'react';

class BurgerMenu extends Component {
	render() {
		const MenuLabels = [
			{ label: 'Home' },
			{ label: 'About' },
			{ label: 'Recipes' },
			{ label: 'Mobile App' },
			{ label: 'Contact' }
		];

		return (
			<div>
				<nav>
					<div>
						<ul className="menu-list">
							{MenuLabels.map((labels) => (
								<li className="menu-items" key={labels.label}>
									{labels.label}
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default BurgerMenu;
