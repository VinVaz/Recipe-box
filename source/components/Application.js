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
		recipes: [
		  {name:"pie", ingredients:['eggs', 'flour', 'sugar']},
		  {name:"ice cream", ingredients:['eggs', 'sugar']}
		],
		isHidden : true
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
	removeRecipeByName = () => {
		let recipeName = "pie"
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

	render(){
	  const {recipes} = this.state;
	  const {isHidden} = this.state;
	  return(
		<div style={ApplicationStyle}>
		  {!isHidden && <Editor/>}
		  <div>
		    <Container 
	          allTheRecipes={recipes}
			  removeRecipe={this.removeRecipeByName}
			/>
		  </div>
		   <div style={BottomBox}>
		    <AddRecipe toggle={this.toggleEditor}/>
		  </div>
		</div>
	  );
	};
}
export default Application;