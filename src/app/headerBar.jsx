import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

class HeaderBar extends Component {

  constructor(props, context){
    super(props, context);
  }
  render(){
    
    return (
      <div className="header pure-u-1">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <a className="pure-menu-heading" href="">浪浪去哪兒</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">地圖</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">登入</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">註冊</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default HeaderBar;