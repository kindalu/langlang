import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

class LangBox extends Component {

  constructor(props, context){
    super(props, context);
  }
  render(){
    let record = this.props.record;
    return (
      <div className="header pure-u-1-4">
      </div>
    );
  }
}

export default LangBox;