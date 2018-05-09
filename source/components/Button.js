import React from 'react';

const buttonStyle = {
	margin: '10px auto',
	color: '#FFFFFF',
	backgroundColor: '#3366FF',
	display: 'inline-block'
};

const Button = () => (
  <button
    className="btn btn-default"
	style={buttonStyle}
  >Add Recipe</button>
);
export default Button;