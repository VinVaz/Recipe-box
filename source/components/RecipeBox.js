import React from 'react';
import Recipe from './Recipe';
import IngredientsBox from './IngredientsBox';

const RecipeBoxStyle = {
	backgroundColor: ' #FBE7F4',
	padding: "2px",
	borderRadius: '3px',
	position: 'relative'
};

class RecipeBox extends React.Component {
	render(){
		return(
		  <div style={RecipeBoxStyle}>
			  <Recipe/>
			  <IngredientsBox/>
		  </div>
		);
	};
}

export default RecipeBox;