import React from 'react';
import CardsComponent from './child.jsx';

class FavouriteDisplay  extends React.Component{

  constructor(){
    super();
  }
  render(){

    var divStyle = {
      marginTop: 80
    }

    var JsonArray = this.props.json.map(function(item){

      return <CardsComponent  id={item._id}
        name={item.name}
         image={item.image}
         address={item.address}
         cuisines={item.cuisines}
         ratings={item.ratings}
       comments={item.comments}
       del='deleted'
     />

    });
    return (
        <div style={divStyle} className='ui four stackable cards'>{JsonArray}</div>
    );
  }
}

module.exports = FavouriteDisplay;
