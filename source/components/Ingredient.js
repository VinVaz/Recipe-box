import React from 'react';

const IngredientStyle = {
	width: '100%',
	height: '30px',
	backgroundColor: "#FEFEFE",
    padding: '3px',
	marginBottom: '0px',
	borderRadius: '3px',
	border: '0.5px solid #898989'
};

class Ingredient extends React.Component {
	render(){
		const {label} = this.props;
		return(
		   <div
				style={IngredientStyle}
			>{label}</div>
		);
	};
}

export default Ingredient;