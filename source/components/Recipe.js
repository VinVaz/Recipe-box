import React from 'react';

const RecipeStyle = {
	backgroundColor: ' #FBE7F4',
	border: 'none',
    width: '100%',
	height: '30px'
};

const Recipe = ({label}) => (
  <button
	style={RecipeStyle}
  >{label}</button>
);
export default Recipe;