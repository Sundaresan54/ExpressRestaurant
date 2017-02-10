import React from 'react';
import CardsComponent from './child.jsx';

class DisplayComponent  extends React.Component{

  constructor(){
    super();
  }
  render(){

    var divStyle = {
      marginTop: 80
    }

    var JsonArray = this.props.json.map(function(item){

      return <CardsComponent name={item.restaurant.name}
         image={item.restaurant.featured_image}
         address={item.restaurant.location.address}
         cuisines={item.restaurant.cuisines}
         ratings={item.restaurant.user_rating.aggregate_rating}
       comments={item.restaurant.comments}
     fav='favourite'/>

    });
    return (
        <div style={divStyle} className='ui four stackable cards'>{JsonArray}</div>
    );
  }
}

module.exports = DisplayComponent;
