import React from 'react';

const IngredientStyle = {
	width: '100%',
	height: '30px',
	backgroundColor: "#FEFEFE",
    padding: '3px',
	borderRadius: '3px',
	border: '0.5px solid #898989'
};

class Ingredient extends React.Component {
	render(){
		return(
		   <div
				style={IngredientStyle}
			>Eggs</div>
		);
	};
}

export default Ingredient;