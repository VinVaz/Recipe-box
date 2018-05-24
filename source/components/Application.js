import React, {Component}  from 'react';
import AddRecipe from './AddRecipe';
import Container from './Container';
import Editor from './Editor';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './application.css';

const ApplicationStyle = {
	margin: '20px 50px',
	position: 'relative'
}
const UnfocusedStyle = {
	filter: 'blur(1px)'
}
const BottomBox = {
	padding: '10px 0px'
}

class Application extends Component{
	state = {
		recipes: [],
		editorIsHidden : true,
		editorTitle: "",
		editorRecipeInput: "",
		editorIngredientsInput:"",
		editorIsAdding: false,
		selectedRecipeIndex: -1
	};
	toggleEditor = () => {
		this.setState({
			editorIsHidden: !this.state.editorIsHidden
		});
	}
	closeEditor = () => {
		this.setState({
			editorIsHidden: true
		});
	}
    getSelectedRecipeIndex = (recipe) => {
		const {recipes} = this.state;
		const index = recipes.indexOf(recipe);
		this.setState({
			selectedRecipeIndex: index
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
	isEditorAdding = (answer) => {
		this.setState({
			editorIsAdding: answer
		});
	}
	setRecipes = (object) => {
		const {recipes} = this.state;
		recipes.push(object);
		this.setState({
			recipes: recipes
		});
	}
	adjustRecipe = (newObject) => {
		let {recipes, selectedRecipeIndex} = this.state;
		let newRecipes = recipes.slice(0);
		if(selectedRecipeIndex > -1){
			newRecipes.splice(selectedRecipeIndex, 1, newObject);
		}
		this.setState({
			recipes: newRecipes
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
	  
	  const {recipes,
			 editorIsHidden,
			 editorTitle,
			 editorIngredientsInput,
			 editorRecipeInput,
			 editorIsAdding
	  } = this.state;
	  
	  return(
		<div style={ApplicationStyle}>
		    <CSSTransitionGroup
			transitionName="editorBox"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
		      {!editorIsHidden && <Editor 
				close={this.closeEditor}
				allTheRecipes={recipes}
				editorTitle={editorTitle}
				editorIngredientsInput={editorIngredientsInput}
				editorRecipeInput={editorRecipeInput}
				setRecipes={this.setRecipes}
				adjustRecipe={this.adjustRecipe}
				editorIsAdding={editorIsAdding}
		      />}
		    </CSSTransitionGroup>
		  <div style={editorIsHidden ? null : UnfocusedStyle}>
		    <div>
		      <Container 
	            allTheRecipes={recipes}
			    removeRecipe={this.removeRecipe}
			    toggle={this.toggleEditor}
			    setEditorTitle={this.setEditorTitle}
				isEditorAdding={this.isEditorAdding}
				getSelectedRecipeIndex={this.getSelectedRecipeIndex}
			  />
		    </div>
		    <div style={BottomBox}>
		      <AddRecipe 
			    toggle={this.toggleEditor}
			    setEditorTitle={this.setEditorTitle}
				isEditorAdding={this.isEditorAdding}
			  />
		    </div>
		  </div>
		</div>
	  );
	};
}
export default Application;