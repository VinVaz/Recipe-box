import React from 'react';
import Ingredient from './Ingredient';
import Edit from './Edit';
import Delete from './Delete';

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
}
const IngredientsBoxStyle = {
	padding: '15px',
	backgroundColor: '#FFF',
	textAlign: 'center',
	borderRadius: '0px 0px 3px 3px',
	width: '100%'
}

class IngredientsBox extends React.Component {
	
	createIngredientsTable = (ingredients) => {
	    const listItems = ingredients.map((name, index) =>{
		   return <Ingredient label={name} key={index}/>
	    });
	    return (
		  <table style={TableStyle}>
			{listItems}
		  </table>
		);
	}
	editButtonFunctions = () => {
		const {setEditButtonFunctions, recipe, getSelectedRecipeIndex} = this.props;
	}
	render(){
	const {allTheIngredients,
		  removeRecipe,
		  setEditButtonFunctions, 
		  recipe,
		  getSelectedRecipeIndex
		  } = this.props;
		  
		return(
		  <div style={IngredientsBoxStyle}>
		    <h2>Ingredients</h2>
			{this.createIngredientsTable(allTheIngredients)}
			<div style={ButtonsBox}>
			  <div style={buttonsStyle}>
	            <Delete remove={removeRecipe} target={recipe}/>
			    <Edit 
				  fireEditButtonFunctions={setEditButtonFunctions}
				/>
			  </div>
			</div>
		  </div>
		);
	}
}

export default IngredientsBox;