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
class AddRecipe extends React.Component {
	setFuntions = () => {
		const {toggle, setEditorTitle, isEditorAdding} = this.props;
		toggle();
		setEditorTitle("Add recipe", "Recipe name", "Enter ingredients, separated by commas");
		isEditorAdding(true);
	}
	render(){
	  return(
		 <button
	       style={AddRecipeStyle}
	       onClick={this.setFuntions}
         >Add Recipe</button>
	  );
	}
}
export default AddRecipe;