import React from 'react'
import ReactDOM from 'react-dom'
var SearchComponent = require('./zomatoClient/search.jsx');
var DisplayComponent = require('./zomatoClient/display.jsx');

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            json: []
        };

    }
    getCityId(cityId, cuisine) {
        $.ajax({
            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityId}`,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "5b27885a5b144099cf086e23104e5520");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));

                this.getResturantDataFromZomato(data.location_suggestions[0].id, cuisine);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    getResturantDataFromZomato(cityId, cuisine) {
        $.ajax({
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${cuisine}&count=20`,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "5b27885a5b144099cf086e23104e5520");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data.restaurants));
                this.setState({json: data.restaurants});
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
                <SearchComponent AjaxCall={this.getCityId.bind(this)}/>
                <DisplayComponent json={this.state.json}/>
            </div>
        );

    }
}
module.exports=MainComponent;
