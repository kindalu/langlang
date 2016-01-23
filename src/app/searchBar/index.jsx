import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

class SearchBar extends Component {

  constructor(props, context){
    super(props, context);
  }

  render(){  
    return (
      <div className={styles.root}>
        <p>(施工中) 之後會放搜尋列</p>
      </div>
    );
  }
}

export default SearchBar;