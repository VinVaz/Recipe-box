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
		]
	};
	/*addNewRecipe = (recipeName) => {
		let {recipes} = this.state;
        let newRecipes = recipes.push(recipeName);
		this.setState({
			recipes: newRecipes
		});
	}
	removeRecipe = (recipeName) => {
		let {recipes} = this.state;
		let index = recipes.indexOf(recipeName);
		if(index > -1){
			let newRecipes = recipes.slice(index, 1);
		}
		this.setState({
			recipes: newRecipes
		});
	}
	*/
	render(){
	  const {recipes} = this.state;
	  return(
		<div style={ApplicationStyle}>
		  <Editor/>
		  <div>
		    <Container 
	          allTheRecipes={recipes}
			/>
		  </div>
		   <div style={BottomBox}>
		    <AddRecipe/>
		  </div>
		</div>
	  );
	};
}
export default Application;