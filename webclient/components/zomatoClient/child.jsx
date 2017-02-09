import React from 'react';
import { Input } from 'semantic-ui-react'
import ButtonComponent from './button.jsx';
var textBoxStyle = {
  height: '70px'
}
var imgStyle = {
  height: '200px',
}
var textStyle = {
  color: 'green',
  fontSize: '110%'
}
var inputStyle = {
  color: 'grey'
}
var commentStyle = {
  paddingLeft:'10px'
}

class CardsComponent extends React.Component {
    constructor() {
        super();
        this.state = {buttonName: 'Add To Favourites',colorName:'green'};
    }

    whenClick() {
    $.ajax({
        type: 'POST',
        url: '/restaurant/addRestaurant',
      data: {
        'name':this.props.name,
        'address':this.props.address,
        'cuisines':this.props.cuisines,
        'ratings':this.props.ratings,
        'image':this.props.image
      },
        success: function(msg){
            this.setState({buttonName:'Added to Your Favourites',colorName:'red'});
        }.bind(this)
    });
    }

    render() {
        return (
              <div className="card">
                <div  className="image">
                  <img style={imgStyle} src={this.props.image} />
                </div>
                <div className="content">
                  <div className="header">{this.props.name}</div>
                  <div className="meta" style={textBoxStyle}>
                    <span style={textStyle} >Address :</span><span style={inputStyle} >{this.props.address}</span>
                  </div>
                  <div className="description">
                    <span style={textStyle} >Cuisines :</span><span style={inputStyle} >{this.props.cuisines}</span>
                  </div>
                </div>
                <div style={textStyle} className="extra content">
                  <span>Ratings :</span><span style={inputStyle}>{this.props.ratings}/5</span>
                  </div>
                  <div>
                  <Input style={commentStyle} type = 'text'  placeholder='comments' value ={this.props.comments} ></Input>
</div>

<div>
          <ButtonComponent  Click={this.whenClick.bind(this)} size='large' color={this.state.colorName || 'green'} name='stars' button={this.state.buttonName}/>
</div>

              </div>
        );
    }
}
module.exports = CardsComponent;
