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
const TableStyle = {
	width: '100%',
	backgroundColor: "#FEFEFE",
	borderCollapse: 'collapsed',
	borderRadius: '3px',
    border: '0.5px solid #898989'	
}

class IngredientsBox extends React.Component {
	createIngredient = (name) => {
		return <Ingredient label={name}/>
	}
	createIngredientRows = (ingredients) => {
	   return ingredients.map(this.createIngredient);
	}
	
	
	render(){
	const {allTheIngredients, removeRecipe, toggleEditor, setEditButtonFuntions, recipeLabel} = this.props;
		return(
		  <div style={IngredientsBoxStyle}>
		    <h2>Ingredients</h2>
			<table style={TableStyle}>
			  {this.createIngredientRows(allTheIngredients)}
			</table>
			<div style={ButtonsBox}>
			  <div style={buttonsStyle}>
	            <Delete removeRecipe={removeRecipe} label={recipeLabel}/>
			    <Edit setEditButtonFuntions={setEditButtonFuntions}/>
			  </div>
			</div>
		  </div>
		);
	}
}

export default IngredientsBox;