import React from 'react';

const EditorStyle = {
	backgroundColor: "#FFF",
	position: 'absolute',
	right: '0px',
	height: "200px",
	width: "400px",
	zIndex: "1"
};

class Editor extends React.Component {
	render(){
		return(
		  <div style={EditorStyle}>
		    <h2>New Recipe</h2>
		  </div>
		);
	}
}

export default Editor;