import React from 'react';
import { Button } from 'semantic-ui-react'

class ButtonComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <button className="ui button primary" onClick ={this.props.Click} >{this.props.button}</button>
</div>
  );
  }
}

 module.exports=ButtonComponent;
