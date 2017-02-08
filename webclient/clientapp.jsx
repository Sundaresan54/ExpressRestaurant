import React from 'react';
import ReactDOM from 'react-dom';
var ParentComponent=require('./components/sample/index.jsx');



class MainComponent extends React.Component {
	constructor () {
		super();
		this.state={message:"message1"}
	}
	updateState(e){
		this.setState({message:e})
	}

	render () {
		return (

			<div>
				<ParentComponent click = {this.updateState.bind(this)} message={this.state.message}/>
				<h1>hello sundar {this.state.message}</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<MainComponent />,document.getElementById('sample')
);
