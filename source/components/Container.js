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
	createRecipeBoxes = (recipes) => {
	    return recipes.map((recipe) => {
	        const {removeRecipe, setEditorInputValues, toggle, setEditorTitle} = this.props;
			return <RecipeBox 
			      key={recipe.id}
		          recipe={recipe} 
				  toggle={toggle}
				  setEditorTitle={setEditorTitle}
				  removeRecipe={removeRecipe}
				  hideAllRecipeBoxes={this.hideAllRecipeBoxes}
				  allRecipeBoxesAreHidden={this.state.allRecipeBoxesAreHidden}
			   />
	    });
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