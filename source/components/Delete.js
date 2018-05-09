import React from 'react';

const DeleteStyle = {
	margin: '10px auto',
	color: '#FFF',
	backgroundColor: '#F00',
	display: 'inline'
};

const Delete = () => (
  <button
    className="btn btn-default"
	style={DeleteStyle}
  >Delete</button>
);
export default Delete;