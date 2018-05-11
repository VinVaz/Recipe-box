import React from 'react';
import Recipe from './Recipe';
import Ingredient from './Ingredient';
import Edit from './Edit';
import Delete from './Delete';

const IngredientsBoxStyle = {
	padding: '15px',
	backgroundColor: "#FFF",
	textAlign: "center",
	borderRadius: '0px 0px 3px 3px',
	width: "100%"
};
const buttonsStyle = {
	display: 'block'
}
const ButtonsBox = {
	paddingTop: '15px',
    textAlign: 'left',
	margin: '0px'
}

class IngredientsBox extends React.Component {
	createIngredient = (name) => {
		return <Ingredient label={name}/>
	}
	createIngredientBoxes = (ingredients) => {
	   return ingredients.map(this.createIngredient);
	}
	
	
	render(){
	const {allTheIngredients} = this.props;
		return(
		  <div style={IngredientsBoxStyle}>
		    <h2>Ingredients</h2>
			  {this.createIngredientBoxes(allTheIngredients)}
			<div style={ButtonsBox}>
			  <div style={buttonsStyle}>
			    <Delete/><Edit/>
			  </div>
			</div>
		  </div>
		);
	}
}

export default IngredientsBox;