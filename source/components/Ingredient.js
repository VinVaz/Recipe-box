import React from 'react';

const TableRowStyle = {
	height: '30px',
	textAlign: 'left',
	border: '0.5px solid #898989'
};
const TableDataStyle = {
    paddingLeft: '10px',
}

class Ingredient extends React.Component {
	render(){
		const {label} = this.props;
		return(
		  <tr style={TableRowStyle}>
		    <td style={TableDataStyle}>{label}</td>
		  </tr>
 		);
	};
}

export default Ingredient;