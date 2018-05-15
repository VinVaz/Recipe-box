import React from 'react';
import RecipeBox from './RecipeBox';

const ContainerStyle = {
	display: 'inline-block',
	borderRadius: '5px',
	backgroundColor: "#f9f3fc",
	position: "relative",
	textAlign: "center",
	border: '3px solid #EBD7F4',
	width: '100%',
	padding: "20px"
};

class Container extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
		allRecipeBoxesAreHidden: true
	  }
	}	
    hideAllRecipeBoxes = () => {
		this.setState({
			allRecipeBoxesAreHidden: !this.state.allRecipeBoxesAreHidden
		});
	}
	setEditButtonFuntions = () => {
		const {toggle, setEditorTitle} = this.props;
		toggle();
		setEditorTitle("Edit Recipe");
	}
	createRecipe = (recipe) => {
	  const {removeRecipe, toggle} = this.props;
		return <RecipeBox 
		          recipeLabel={recipe.name} 
				  ingredients={recipe.ingredients}
	              setEditButtonFuntions={this.setEditButtonFuntions}
				  removeRecipe={removeRecipe}
				  hideAllRecipeBoxes={this.hideAllRecipeBoxes}
				  allRecipeBoxesAreHidden={this.state.allRecipeBoxesAreHidden}
			   />
	}
	createRecipeBoxes = (recipes) => {
	   return recipes.map(this.createRecipe);
	}
	render(){
	  let {allTheRecipes} = this.props;
		return(
		  <div style={ContainerStyle}>
			  {this.createRecipeBoxes(allTheRecipes)}
		 </div>
		);
	};
}

export default Container;