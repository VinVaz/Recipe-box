import React from 'react';

const AddRecipeStyle = {
	margin: '10px auto',
	color: '#FFFFFF',
	backgroundColor: '#3366FF',
	display: 'block'
};

const AddRecipe = () => (
  <button
    className="btn btn-default"
	style={AddRecipeStyle}
  >Add Recipe</button>
);
export default AddRecipe;