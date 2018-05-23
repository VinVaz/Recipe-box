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
	closeEditor = () => {
		this.setState({
			isHidden: true
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
		    <CSSTransitionGroup
			transitionName="editorBox"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
		      {!isHidden && <Editor 
				close={this.closeEditor}
				allTheRecipes={recipes}
				editorTitle={editorTitle}
				editorIngredientsInput={editorIngredientsInput}
				editorRecipeInput={editorRecipeInput}
				setRecipes={this.setRecipes}
		      />}
		    </CSSTransitionGroup>
		  <div style={isHidden ? null : UnfocusedStyle}>
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
		</div>
	  );
	};
}
export default Application;