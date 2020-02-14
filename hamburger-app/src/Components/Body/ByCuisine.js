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
const numOfRecipesByCuisine = CuisinesData.map(function(data) {
	return data.numOfRecipes;
});
console.log(numOfRecipesByCuisine);
class ByCuisine extends Component {
	render() {
		return (
			<div>
				<div className="byCuisinesWrap">
					<h3>Browse By Cuisines</h3>
					<ul className="imgTiles">
						{CuisinesData.map((data) => (
							<li className="allCuisineImages" id={data.type} key={data.type}>
								{data.type}
								<p>{data.numOfRecipes} Recipes</p>
							</li>
						))}
					</ul>
				</div>
				<div className="counter">
					<div>
						<p>{numOfRecipesByCuisine.reduce((prevNum, nextNum) => prevNum + nextNum)}</p>
						<span>Recipes Available</span>
					</div>
					<div>
						<p>509210</p>
						<span>Active Users</span>
					</div>
					<div>
						<p>983728</p>
						<span>Reviews</span>
					</div>
					<div>
						<p>33920</p>
						<span>Photos and Videos</span>
					</div>
				</div>
			</div>
		);
	}
}

export default ByCuisine;
