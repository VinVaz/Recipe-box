import React from 'react';
import Recipe from './Recipe'

const RecipesBoxStyle = {
	display: 'inline-block',
	margin: '20px 10px',
	backgroundColor: "#EBD7F4",
};

class RecipesBox extends React.Component {
	render(){
		return(
		  <div style={RecipesBoxStyle}>
		    <Recipe/>
		  </div>
		);
	}
}

export default RecipesBox;