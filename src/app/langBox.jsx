import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

class LangBox extends Component {

  constructor(props, context){
    super(props, context);
  }
  render(){
    let record = this.props.record;
    let date = new Date(parseInt(record.created_time));
    let dateString = (date.getMonth()+1)+'月'+(date.getDate())+'日'+' '+date.getHours()+':'+date.getMinutes();
    return (
      <div className={styles.recordBox}>
        <div className={styles.recordImgBox}>
          <a href={record.link} target="_blank">
            <img className={styles.recordImg} ref={record.id} src={record.images.thumbnail.url}/>
          </a>
        </div>

        <div className={styles.recordTextBox}>
          <div>
            <img className={styles.userImg} src={record.caption.from.profile_picture}/>
            <div className={styles.userGroupBox}>
              <div className={styles.usernameBox}>{record.user.username}</div>
              <div className={styles.dateBox}>{dateString}</div>
            </div>
          </div>
          
          <div className={styles.textBox}>
            文長沒法放... 這是樣本文章。
          </div>

          <div className={styles.tagBox}>
            {'#'+record.tags[0]}
          </div>
        </div>
      </div>
    );
  }
}

export default LangBox;