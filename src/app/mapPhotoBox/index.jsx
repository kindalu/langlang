import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

class MapPhotoBox extends Component {

  constructor(props, context){
    super(props, context);
  }

  render(){  
    const record = this.props.record;
    return (
      <a href={record.link} target="_blank">
        <div className={styles.photoBox}>
          <img ref={record.id} src={record.images.thumbnail.url}/>
        </div>
      </a>
    );
  }
}

export default MapPhotoBox;