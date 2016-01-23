import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import MapPage from './mapPage';
import HeaderBar from './headerBar';
import styles from './styles.scss'

class App extends Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div className={styles.app}>
        <HeaderBar/>
        <MapPage/>
      </div>
    );
  }
}

(function () {

  //Needed for React Developer Tools
  window.React = React;

  ReactDom.render(<App/>, document.getElementById('app'));

})();
