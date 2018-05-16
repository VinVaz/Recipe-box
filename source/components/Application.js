import React, {Component}  from 'react';
import AddRecipe from './AddRecipe';
import Container from './Container';
import Editor from './Editor';

const ApplicationStyle = {
	margin: '20px 50px',
	position: "relative",
}
const BottomBox = {
	padding: '10px 0px'
}


class Application extends Component{
	state = {
		recipes: [],
		isHidden : true,
		editorTitle: ""
	};
	toggleEditor = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}
	/*addNewRecipe = (recipeName) => {
		let {recipes} = this.state;
        let newRecipes = recipes.push(recipeName);
		this.setState({
			recipes: newRecipes
		});
	}*/
	removeRecipeByName = (recipeName) => {
		let {recipes} = this.state;
		let arrayOfRecipeNames = recipes.map(function(recipe){
			return recipe.name;
		});
		let index = arrayOfRecipeNames.indexOf(recipeName);
		if(index > -1){
			recipes.splice(index, 1);
		}
		this.setState({
			recipes: recipes
		});
	}
	setRecipes = (object) => {
		const {recipes} = this.state;
		recipes.push(object);
		this.setState({
			recipes: recipes
		});
	}
    setEditorTitle = (name) => {
		this.setState({
			editorTitle: name
		});
	}
	render(){
	  const {recipes, isHidden, editorTitle} = this.state;
	  return(
		<div style={ApplicationStyle}>
		  {!isHidden && <Editor 
		    toggle={this.toggleEditor}
			editorTitle={editorTitle}
			setRecipes={this.setRecipes}
		  />}
		  <div>
		    <Container 
	          allTheRecipes={recipes}
			  removeRecipe={this.removeRecipeByName}
			  toggle={this.toggleEditor}
			  setEditorTitle={this.setEditorTitle}
			/>
		  </div>
		   <div style={BottomBox}>
		    <AddRecipe 
			  toggle={this.toggleEditor}
			  setEditorTitle={this.setEditorTitle}
			/>
		  </div>
		</div>
	  );
	};
}
export default Application;