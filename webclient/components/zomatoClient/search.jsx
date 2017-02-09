import React from 'react';
import CardsComponent from './child.jsx';
import { Button } from 'semantic-ui-react'
class SearchComponent extends React.Component {
  constructor() {
    super ();
    this.state = {
      cityId: '',
      cuisine:''
    };
  }
  onChangeCity(e) {
    this.setState({cityId:e.target.value})
  }
  onChangeCuisine(e) {
    this.setState({cuisine:e.target.value})
  }
  onClick() {
    var cityId = this.state.cityId;
    var cuisine = this.state.cuisine;
    this.props.AjaxCall(cityId,cuisine);
    this.setState({cityId:''});
    this.setState({cuisine:''});
  }
  render () {
    return (
      <div>
        <div className ="ui  center aligned grid">
        <div className = "ui input">
        <input type = 'text' placeholder ='Enter CityID' onChange ={this.onChangeCity.bind(this)} value={this.state.cityId} />
        <input type = 'text' placeholder = 'Enter Cuisine' onChange ={this.onChangeCuisine.bind(this)} value ={this.state.cuisine} />
        </div>
        <button className="ui button teal" onClick ={this.onClick.bind(this)} >Search</button>
      </div>
      </div>
    );
  }
}
module.exports = SearchComponent;
