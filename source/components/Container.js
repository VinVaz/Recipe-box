import React from 'react';
import RecipeBox from './RecipeBox';

const ContainerStyle = {
	display: 'inline-block',
	margin: '20px 10px',
	backgroundColor: "#EBD7F4",
	position: "relative",
	textAlign: "center",
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