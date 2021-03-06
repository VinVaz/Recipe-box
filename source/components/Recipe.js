import React from 'react';

const RecipeStyle = {
	backgroundColor: '#FFE7F4',
	color: '#49311C',
	fontFamily: 'bellotaregular',
	fontWeight: '600',
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