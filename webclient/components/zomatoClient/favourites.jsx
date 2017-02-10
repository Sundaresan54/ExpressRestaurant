import React from 'react';
import FavouriteDisplay from './favouritedisp.jsx';
class Favourite extends React.Component {
constructor() {
  super();
  this.state = {
      json: []
  };

}
componentWillMount() {
$.ajax({
    type: 'GET',
    url: 'http://localhost:8080/restaurant/viewRestaurant/',
    success: function(data) {
        console.log('got Json',data);
        this.setState({json: data});
    }.bind(this),
    error: function(err) {
        console.log('error occurred on AJAX');
        console.log(err);
    }.bind(this)
});
}
  render() {
    return (
      <div>
        <FavouriteDisplay json={this.state.json} fav='fav' />
      </div>
    );
  }
}
module.exports = Favourite;
