import React from 'react';
import { Button } from 'semantic-ui-react'

class ButtonComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    var style = {
      color: 'orange',

    }
    return (
      <div>
      <button className='ui large button  grey' style={style} onClick ={this.props.Click} >{this.props.button}</button>
</div>
  );
  }
}

 module.exports=ButtonComponent;
