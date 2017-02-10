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
        this.state = {comments:'',buttonName: 'Add To Favourites',colorName:'green',deleteButton:'Delete',updateButton:'Update'};
    }


      addRestaurant() {
        $.ajax({
        type: 'POST',
        url: `http://localhost:8080/restaurant/addRestaurant`,
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
    deleteRestaurant() {
      var id = this.props.id;
      $.ajax({
          type: 'DELETE',
          url: `http://localhost:8080/restaurant/deleteRestaurant/${id}`,

          success: function(msg){
            console.log('delete',msg)
              this.setState({deleteButton:'deleted ',colorName:'red'});
          }.bind(this)
      });
    }

    updateRestaurant() {
      var comments = this.state.comments;
      var id = this.props.id;
      alert(comments);
      $.ajax({
          type: 'PUT',
          url: `http://localhost:8080/restaurant/updateRestaurant/${id}`,
          data:{
            'comments':comments
          },
          success: function(msg){
            console.log('updated',msg)
              this.setState({updateButton:'Updated ',colorName:'red'});
          }.bind(this)
      });
    }

updateComments(e) {
    this.setState({comments:e.target.value})

}
    render() {
      var f=this.props.fav;
      var del=this.props.delt;
      var add='';
      var delt='';
      var text='';
      var update ='';
      if(f== 'favourite') {

    add =<ButtonComponent  Click={this.addRestaurant.bind(this)} size='large' color={this.state.colorName || 'green'} name='stars' button={this.state.buttonName || 'Add'}/>
    }
    else{
      text=<Input  type = 'text' onChange={this.updateComments.bind(this)} placeholder={this.props.comments} value ={this.state.comments} ></Input>
      update = <ButtonComponent Click={this.updateRestaurant.bind(this)} size='large' color={this.state.colorName || 'green'} name='stars' button={this.state.updateButton || 'Update'}/>
      delt=<ButtonComponent  Click={this.deleteRestaurant.bind(this)} size='small' color={this.state.colorName || 'green'} name='stars' button={this.state.deleteButton || 'Delete'}/>
    }
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
                  {add}
                  {text}
                  {update}
                  {delt}

              </div>
        );
    }
}
module.exports = CardsComponent;
