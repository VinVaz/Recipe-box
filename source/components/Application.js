import React, {Component}  from 'react';
import AddRecipe from './AddRecipe';
import Container from './Container';
import Editor from './Editor';


class Application extends Component{
	render(){
	  return(
		<div>
		  <Editor/>
		  <Container/>
		  <AddRecipe/>
		</div>
	  );
	}
}
export default Application;