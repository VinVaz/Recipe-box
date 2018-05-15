import React from 'react';

const RecipeStyle = {
	backgroundColor: ' #FBE7F4',
	border: 'none',
    width: '100%',
	height: '30px'
};

const Recipe = ({label, toggle}) => {
  return(
  <button
	style={RecipeStyle}
	onClick={toggle}
  >{label}</button>);
};
export default Recipe;