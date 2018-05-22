import React from 'react';

const EditorStyle = {
	backgroundColor: '#FFF',
	color: '#000',
	border: '0.5px solid #898989',
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
const InputStyle = {
	paddingLeft: '5px',
	border: '0.5px solid #898989',
	borderRadius: '3px',
    width: '100%'
}
const TextAreaStyle = {
	paddingLeft: '5px',
	border: '0.5px solid #898989',
	borderRadius: '3px',
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
	state={
		recipeTitle:"",
		recipeIngredients:""
	}
	handleChangesOnRecipeTitle(event){
		this.setState({
			recipeTitle: event.target.value
		});
	}
	handleChangesOnRecipeIngredients(event){
		this.setState({
			recipeIngredients: event.target.value
		});
	}
	handleSubmit = () => {
		const {toggle, setRecipes} = this.props;
		const {recipeTitle, recipeIngredients} = this.state;
		let myArray = recipeIngredients.split(",");
		let myId = new Date().getTime() + Math.floor(Math.random() * 1000);
		const object = {name:recipeTitle, ingredients:myArray, id: myId}
		setRecipes(object);
		toggle();
	}
	
	render(){
		const {toggle, editorTitle, editorRecipeInput, editorIngredientsInput} = this.props;
		return(
		  <div style={EditorStyle}>
		    <div style={HeaderBox}>
			  <div style={HeaderBoxLeft}>{editorTitle}</div>
			  <div style={HeaderBoxRight}>
			    <button style={CloseButtonHeader} onClick={toggle}>x</button>
			  </div>
		    </div>
			<form onSubmit={this.handleSubmit}>
				<div style={BodyBox}>
				  <p>Recipe</p>
				  <input 
				    type="text"
					style={InputStyle} 
					onChange={this.handleChangesOnRecipeTitle.bind(this)}
					placeholder={editorRecipeInput}
				  />
				  <br />
				  <br />
				  <p>Ingredients</p>
				  <textarea 
				    type="text"
					style={TextAreaStyle} 
					onChange={this.handleChangesOnRecipeIngredients.bind(this)}
					placeholder={editorIngredientsInput}
				  />
				</div>
				<div style={FooterBox}>
				  <div style={LeftFooterButtonsBox}>
					<input
                      type="submit"					
					  style={FooterLeftButton} 
					  onClick={this.handleSubmit}
					  value={editorTitle}
					/>
				  </div>
				  <div style={RightFooterButtonsBox}>
					<button style={FooterRightButton} onClick={toggle}>Close</button>
				  </div>
				</div>
			</form>
		  </div>
		);
	}
}

export default Editor;