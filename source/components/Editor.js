import React from 'react';

const EditorStyle = {
	backgroundColor: '#FFF',
	color: '#000',
	border: '0.5px solid #000',
	borderRadius: '5px',
	position: 'absolute',
	margin: '0 20% 0 20%',
	top: '20px',
	minWidth: '60%',
	zIndex: "1"
};
const HeaderBox = {
	padding: '15px',
	borderBottom: '0.5px solid #898989',
	position: 'relative',
}
const BodyBox = {
	borderBottom: '0.5px solid #898989',
	padding: '15px'
}
const FooterBox = {
	padding: '15px',
	textAlign: 'right',
	gridGap: '5px'
}
const InputStyleOne = {
    width: '100%'
}
const InputStyleTwo = {
    width: '100%',
	minHeight: '60px' 
}
const CloseButtonHeader = {
	backgroundColor: '#fff',
    display: 'absolute',
	right: '0px',
	height:'20px',
	margin: 'auto 0px auto 0px',
	left:'20px',
	borderRadius: '10px'
}
const HeaderBoxLeft = {
	display: 'inline-block',
	fontSize: '18px',
	textAlign: 'left',
	width: '90%'
}
const HeaderBoxRight = {
	padding: '0px',
	textAlign: 'right',
	display: 'inline-block',
	width: '10%'
}
const FooterLeftButton = {
	backgroundColor: '#03396c',
	color: '#FFF',
	height: '30px',
	width: '90px',
	borderRadius: '3px',
	border: 'none',
}
const FooterRightButton = {
	backgroundColor: '#FFF',
	height: '30px',
	width: '60px',
	borderRadius: '3px',
	position: 'relative',
	border: '0.5px solid #898989',
}
const LeftFooterButtonsBox = {
	display: 'inline-block',
	width: '90px',
	margin: '0px 5px'
}
const RightFooterButtonsBox = {
	display: 'inline-block',
	width: '60px',
	margin: '0px 5px'
}

class Editor extends React.Component {
	render(){
		return(
		  <div style={EditorStyle}>
		    <div style={HeaderBox}>
			  <div style={HeaderBoxLeft}>New Recipe</div>
			  <div style={HeaderBoxRight}>
			    <button style={CloseButtonHeader}>x</button>
			  </div>
		    </div>
			<div style={BodyBox}>
			  <p>Recipe</p>
			  <input style={InputStyleOne}/>
			  <br />
			  <br />
			  <p>Ingredients</p>
			  <input style={InputStyleTwo}/>
			</div>
			<div style={FooterBox}>
			  <div style={LeftFooterButtonsBox}>
			    <button style={FooterLeftButton}>Add recipe</button>
			  </div>
			  <div style={RightFooterButtonsBox}>
			    <button style={FooterRightButton}>Close</button>
			  </div>
		    </div>
		  </div>
		);
	}
}

export default Editor;