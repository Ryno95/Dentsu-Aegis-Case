import React, { Component } from 'react';

class GetStartedButton extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleGetStartedClick = () => {
		const elementToGoTo = document.getElementById('pageBottom');
		console.log(elementToGoTo, 'clickclickBOOM');
		// elementToGoTo.scrollIntoView(true);
		elementToGoTo.scrollIntoView({ behavior: 'smooth' });
	};

	render() {
		return (
			<div className="getStartedButton">
				<button onClick={this.handleGetStartedClick}>Get Started</button>
			</div>
		);
	}
}

export default GetStartedButton;
