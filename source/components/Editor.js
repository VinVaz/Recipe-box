import React from 'react';
import image from '../utils/img/close.png';

const EditorStyle = {
	backgroundColor: '#FFF',
	color: '#000',
	border: '0.5px solid #898989',
	borderRadius: '5px',
	position: 'absolute',
	margin: '0 20% 0 20%',
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
	backgroundImage: 'url(' + image + ')',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100% 100%',
    display: 'absolute',
	right: '0px',
	height:'20px',
	width: '20px',
	margin: 'auto 0px auto 0px',
	left:'20px',
	border: 'none',
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
		recipeIngredients:"",
		isTyping: false
	}
	handleChangesOnRecipeTitle(event){
		this.setState({
			recipeTitle: event.target.value,
			isTyping: true
		});
	}
	handleChangesOnRecipeIngredients(event){
		this.setState({
			recipeIngredients: event.target.value,
			isTyping: true
		});
	}
	handleSubmit = (event) => {
		const {close, setRecipes, adjustRecipe, editorIsAdding} = this.props;
		const {recipeTitle, recipeIngredients} = this.state;
		let myArray = recipeIngredients.split(",");
		let myId = new Date().getTime() + Math.floor(Math.random() * 1000);
		const object = {name:recipeTitle, ingredients:myArray, id: myId}
		if(editorIsAdding) {
			setRecipes(object);
		} else {
			adjustRecipe(object);
		}
		close();
		event.preventDefault();
	}
	
	render(){
		const {close, editorTitle, editorRecipeInput, editorIngredientsInput, editorIsAdding} = this.props;
		const {isTyping} = this.state;
		return(
		  <div style={EditorStyle}>
		    <div style={HeaderBox}>
			  <div style={HeaderBoxLeft}>{editorTitle}</div>
			  <div style={HeaderBoxRight}>
			    <button style={CloseButtonHeader} onClick={close}></button>
			  </div>
		    </div>
			<form onSubmit={this.handleSubmit}>
				<div style={BodyBox}>
				  <p>Recipe</p>
				  <input 
				    type="text"
					style={InputStyle} 
					onChange={this.handleChangesOnRecipeTitle.bind(this)}
					placeholder={editorIsAdding ? editorRecipeInput : null}
					value={editorIsAdding ? null : (isTyping ?  null : editorRecipeInput)}
				  />
				  <br />
				  <br />
				  <p>Ingredients</p>
				  <textarea 
				    type="text"
					style={TextAreaStyle} 
					onChange={this.handleChangesOnRecipeIngredients.bind(this)}
					placeholder={editorIsAdding ? editorIngredientsInput : null}
					value={editorIsAdding ? null : (isTyping ?  null : editorIngredientsInput)}
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
					<button type="button" style={FooterRightButton} onClick={close}>Close</button>
				  </div>
				</div>
			</form>
		  </div>
		);
	}
}

export default Editor;