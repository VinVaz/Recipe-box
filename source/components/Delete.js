import React from 'react';

const DeleteStyle = {
	backgroundColor: '#f6895e',
	color: '#FFF',
	marginRight: '10px',
	height: '35px',
	width: '70px',
	borderRadius: '3px',
	border: 'none',
	display: 'inline'
};
	
const Delete = ({removeRecipe}) => {
  return(
    <button
	  style={DeleteStyle}
	  onClick={removeRecipe}
    >Delete</button>
  )
};
export default Delete;