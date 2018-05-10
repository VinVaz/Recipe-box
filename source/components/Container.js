import React from 'react';
import RecipeBox from './RecipeBox';

const ContainerStyle = {
	display: 'inline-block',
	borderRadius: '5px',
	backgroundColor: "#f9f3fc",
	position: "relative",
	textAlign: "center",
	border: '3px solid #EBD7F4',
	width: '100%',
	padding: "20px"
};

class Container extends React.Component {
	render(){
		return(
		  <div style={ContainerStyle}>
			<RecipeBox/>
		 </div>
		);
	};
}

export default Container;