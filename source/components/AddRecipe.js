import React from 'react';

const AddRecipeStyle = {
	textAlign: 'center',
	backgroundColor: '#03396c',
	color: '#FFF',
	height: '30px',
	width: '90px',
	borderRadius: '3px',
	border: 'none'
	
};
const AddRecipe = () => (
  <button
	style={AddRecipeStyle}
  >Add Recipe</button>
);
export default AddRecipe;