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
	render(){
	  return(
		<div style={ApplicationStyle}>
		  <Editor/>
		  <div>
		    <Container/>
		  </div>
		   <div style={BottomBox}>
		    <AddRecipe/>
		  </div>
		</div>
	  );
	}
}
export default Application;