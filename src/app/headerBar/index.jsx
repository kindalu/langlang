import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

class HeaderBar extends Component {

  constructor(props, context){
    super(props, context);
  }
  render(){
    
    return (
      <div className={styles.headerBar}>
            <ul>
                <li> <a href="">浪浪去哪兒</a> </li>
                <ul className={styles.rightGroup}>
                  <li> <a className={styles.active} href="#" >地圖</a></li>
                  <li> <a href="#" >登入</a></li>
                  <li> <a href="#" >註冊</a></li>
                </ul>
            </ul>
      </div>
    );
  }
}

export default HeaderBar;