import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import 地圖頁 from './mapPage';
import 標頭列 from './headerBar';

class App extends Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div>
        <標頭列/>
        {this.props.children}
      </div>
    );
  }
}

(function () {

  //Needed for React Developer Tools
  window.React = React;

  ReactDom.render((
    <Router>
      <Route path='/' component={App}>
        <IndexRoute component={地圖頁} />
      </Route>
    </Router>
  ), document.getElementById('app'));

})();
