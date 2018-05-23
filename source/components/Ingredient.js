import React from 'react';

const TableRowStyle = {
	height: '30px',
	textAlign: 'left',
	border: '0.5px solid #9bfeff'
};
const TableMarginStyle = {
	height: '30px',
	width: '30px',
	borderRight: '0.5px solid #ffcdcd'
};
const TableDataStyle = {
    paddingLeft: '10px',
};

class Ingredient extends React.Component {
	render(){
		const {label} = this.props;
		return(
		  <tr style={TableRowStyle}>
		    <td style={TableMarginStyle}></td>
		    <td style={TableDataStyle}>{label}</td>
		  </tr>
 		);
	};
}

export default Ingredient;