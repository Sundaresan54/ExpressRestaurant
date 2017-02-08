import React from 'react';
var GrandChild = require('./grandchild.jsx');
class Component1 extends React.Component {
	constructor () {
		super();
	}
	handleClick(){
		this.props.whenClick('Bangalore')
	}

	render () {
		return (
			<div>
				<h1>Hello From React by childComponent</h1>

			<GrandChild />
			<p>{this.props.data1}</p>
			<button onClick ={this.handleClick.bind(this)} >clickme</button>
			</div>
		);
	}
}

  class Component2 extends React.Component {
  	constructor () {
  		super();

  	}

  	render () {
  		return (
  			<div>
  				<h1>hello sundaresan</h1>
					<p>{this.props.data2}</p>
  		</div>
  		);
  	}
  }
module.exports={
  Component1,
  Component2
};
