import React, {Component}  from 'react';
import Button from './Button';
import RecipesBox from './RecipesBox'


class Application extends Component{
	render(){
	  return(
		<div>
		  <RecipesBox/>
		  <Button/>
		</div>
	  );
	}
}
export default Application;