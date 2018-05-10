import React from 'react';

const EditStyle = {
	backgroundColor: '#FFF',
	color: '#000',
	height: '35px',
	width: '50px',
	borderRadius: '3px',
	border: '0.5px solid #898989',
	display: 'inline'
};

const Edit = () => (
  <button
    className="btn btn-default"
	style={EditStyle}
  >Edit</button>
);
export default Edit;