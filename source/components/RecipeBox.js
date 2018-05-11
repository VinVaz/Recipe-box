import React from 'react';
import Recipe from './Recipe';
import IngredientsBox from './IngredientsBox';

const RecipeBoxStyle = {
	backgroundColor: '#FBE7F4',
	padding: '2px',
	marginBottom: '5px',
	borderRadius: '3px',
	position: 'relative'
};

class RecipeBox extends React.Component {
	render(){
		const {recipeLabel, ingredients} = this.props;
		return(
		  <div style={RecipeBoxStyle}>
			  <Recipe label={recipeLabel}/>
			  <IngredientsBox allTheIngredients={ingredients}/>
		  </div>
		);
	};
}

export default RecipeBox;