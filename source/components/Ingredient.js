import React from 'react';

const IngredientStyle = {
	display: 'inline',
	margin: '0px',
	width: '80%',
	backgroundColor: "#FEFEFE",
};

class Ingredient extends React.Component {
	render(){
		return(
		   <button
				className="btn btn-default"
				style={IngredientStyle}
			>Eggs</button>
		);
	};
}

export default Ingredient;