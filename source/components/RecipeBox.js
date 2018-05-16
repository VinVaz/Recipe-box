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
		isHidden: true,
		recipe: this.props.recipeLabel,
		ingredients: this.props.ingredients
	}
	toggleIngredientsBox = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}
	/*{
		const {hideAllRecipeBoxes} = this.props;
		const {allRecipeBoxesAreHidden} = this.props;
		hideAllRecipeBoxes();
		console.log(allRecipeBoxesAreHidden)
	}*/
	shouldComponentUpdate(nextProps, nextState){
		if(this.state.isHidden == nextState.isHidden){
		  return false;
		}
		else return true
	}
	render(){
		const {
			  removeRecipe,
			  setEditButtonFuntions
			  } = this.props;
		const {isHidden} = this.state;
		return(
		  <div style={RecipeBoxStyle}>
			<Recipe 
			  label={recipeLabel}
			  toggle={this.toggleIngredientsBox}
			/>
			{!isHidden && <IngredientsBox 
			   allTheIngredients={this.state.ingredients}
			   recipeLabel={this.state.label}
			   removeRecipe={removeRecipe}
			   setEditButtonFuntions={setEditButtonFuntions}
			/>}
		  </div>
		);
	};
}

export default RecipeBox;