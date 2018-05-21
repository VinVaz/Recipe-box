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
		editorTitle: "",
		editorRecipeInput: "",
		editorIngredientsInput:""
	};
	toggleEditor = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	removeRecipe = (recipe) => {
		let {recipes} = this.state;
		const index = recipes.indexOf(recipe);
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
    setEditorTitle = (name, label, values) => {
		this.setState({
			editorTitle: name,
			editorRecipeInput:label,
		    editorIngredientsInput: values
		});
	}
	render(){
	  const {recipes, isHidden, editorTitle, editorIngredientsInput, editorRecipeInput} = this.state;
	  return(
		<div style={ApplicationStyle}>
		  {!isHidden && <Editor 
		    toggle={this.toggleEditor}
			allTheRecipes={recipes}
			editorTitle={editorTitle}
			editorIngredientsInput={editorIngredientsInput}
			editorRecipeInput={editorRecipeInput}
			setRecipes={this.setRecipes}
		  />}
		  <div>
		    <Container 
	          allTheRecipes={recipes}
			  removeRecipe={this.removeRecipe}
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