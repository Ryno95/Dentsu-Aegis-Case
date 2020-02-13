import React, { Component } from 'react';

const CuisinesData = [
	{
		type: 'French',
		numOfRecipes: 7982
	},
	{
		type: 'Indian',
		numOfRecipes: 3911
	},
	{
		type: 'Japanese',
		numOfRecipes: 904
	},
	{
		type: 'Marrocan',
		numOfRecipes: 1362
	},
	{
		type: 'Mexican',
		numOfRecipes: 4785
	},
	{
		type: 'Portuguese',
		numOfRecipes: 841
	},
	{
		type: 'South_African',
		numOfRecipes: 3850
	},
	{
		type: 'Spanish',
		numOfRecipes: 6927
	}
];

class ByCuisine extends Component {
	render() {
		return (
			<div className="byCuisinesWrap">
				<h3>Browse By Cuisines</h3>
				<ul className="imgTiles">
					{CuisinesData.map((data) => (
						<li className="allCuisineImages" id={data.type} key={data.type}>
							{data.type}
							<p>{data.numOfRecipes}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ByCuisine;
