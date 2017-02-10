var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var favourites = require('./components/zomatoClient/favourites.jsx');
var NavBar = require('./components/NavBar');
var About = require('./components/About');
var Home = require('./components/clientapp.jsx');

var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
                <Route path="/" component={MainComp}>
                <IndexRoute component={Home}/>
                <Route path="/favourites" component={favourites}/>
              </Route>
  </Router>,document.getElementById('mountapp'));
