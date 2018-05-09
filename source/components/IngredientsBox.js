import React from 'react';
import Recipe from './Recipe';
import Ingredient from './Ingredient';
import Edit from './Edit';
import Delete from './Delete';

const IngredientsBoxStyle = {
	margin: '0px',
	backgroundColor: "#FFF",
	textAlign: "center",
	position: 'relative',
	height: "200px",
	width: "500px"
};
const buttonsStyle = {
	display: 'block'
}

class IngredientsBox extends React.Component {
	render(){
		return(
		  <div style={IngredientsBoxStyle}>
		    <h2>Ingredients</h2>
		    <Ingredient/>
			<div style={buttonsStyle}>
			  <Delete/><Edit/>
			</div>
		  </div>
		);
	}
}

export default IngredientsBox;