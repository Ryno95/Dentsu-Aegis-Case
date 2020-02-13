import React, { Component } from 'react';
import Slider from './Slider';
import ByCuisine from './ByCuisine';
import photoFill from './image4.png';

class Body extends Component {
	render() {
		return (
			<div>
				<p>
					Lorem ipsum dolor sit amet, populo voluptua assentior cum in, mei munere perfecto suavitate ut, pri
					ullum disputationi id. Usu cetero civibus lucilius te. Ea has mundi salutandi. Vix ne probo ridens
					propriae, natum gubergren et ius. Tritani oblique nominati ne duo, his natum porro an.
				</p>
				<p>
					Sea ex diam affert petentium, te unum scripta eum. Id sit quaestio forensibus, ex semper albucius
					ius, vim eius sonet quodsi ut. An has tale erant officiis, ex brute iudicabit disputando mel, ius
					malorum perpetua ut. Ius consul laoreet adolescens et, qui an cibo albucius suscipit.
				</p>
				{/* <img src={photoFill} alt="fill" className="photoFill" /> */}
				<Slider />
				<ByCuisine />
			</div>
		);
	}
}

export default Body;
