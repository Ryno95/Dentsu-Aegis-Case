import React from 'react';
import Header from '../Components/HeaderComp/Header';
import Body from './Body';
import Footer from './Footer';

function Overview() {
	return (
		<div className="container">
			<div class="menu-button">
				<i class="fas fa-bars" />
			</div>
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default Overview;
