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
	state = {
		ingredientsBoxIsHidden: true,
		recipeLabel: this.props.recipe.name,
		ingredients: this.props.recipe.ingredients,
		key: this.props.key
	}
	toggleIngredientsBox = () => {
		this.setState({
			ingredientsBoxIsHidden: !this.state.ingredientsBoxIsHidden
		});
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.state.ingredientsBoxIsHidden == nextState.ingredientsBoxIsHidden){
		  return false;
		}
		else return true
	}
	setEditButtonFunctions = () => {
		const {toggle, setEditorTitle} = this.props;
		toggle();
		setEditorTitle("Edit Recipe", this.state.recipeLabel, this.state.ingredients);
	}
	render(){
		const {removeRecipe, recipe} = this.props;
		const {ingredientsBoxIsHidden, recipeLabel, ingredients} = this.state;
  
		return(
		  <div style={RecipeBoxStyle}>
			<Recipe 
			  label={recipeLabel}
			  toggle={this.toggleIngredientsBox}
			/>
			{!ingredientsBoxIsHidden && <IngredientsBox 
			   allTheIngredients={ingredients}
			   recipe={recipe}
			   removeRecipe={removeRecipe}
			   setEditButtonFunctions={this.setEditButtonFunctions}
			/>}
		  </div>
		);
	};
}

export default RecipeBox;