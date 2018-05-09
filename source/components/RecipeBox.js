import React from 'react';
import Recipe from './Recipe';
import IngredientsBox from './IngredientsBox';

const RecipeBoxStyle = {
	backgroundColor: '#F00',
	padding: "2px",
	position: 'relative',
	marginBottom: '5px;'
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