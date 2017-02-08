import React from 'react';
var Component1 = require('./child.jsx').Component1;
var Component2 = require('./child.jsx').Component2;


class ParentComponent extends React.Component {
	constructor () {
		super();
	}

	render () {
    	return (
			<div>
				<Component1 whenClick = {this.props.click} data1={this.props.message}/>
			<Component2 data2={this.props.message}/>

			</div>
		);
	}
}

module.exports = ParentComponent;
