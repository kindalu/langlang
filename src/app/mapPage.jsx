import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import co from 'co';
import request from 'superagent';
import thunkify from 'thunkify';
import jsonp from 'jsonp';

class MapPage extends Component {

  state = {records:[]};

  showRecord(record){
    console.log('user_id:' + record.caption.from.id);
    console.log('profile_pic_url:' + record.caption.from.profile_picture);
    console.log('caption:'+ record.caption.text);
    let date = new Date(parseInt(record.created_time));
    console.log('time:'+date );
    console.log('pic_url:'+record.images.thumbnail.url);
    console.log('link:'+record.link);
  }

  constructor(props, context){
    super(props, context);
    let _this = this;

    co(function *(){ 
      let url = "https://api.instagram.com/v1/tags/浪浪/media/recent?access_token=23865487.1677ed0.b276f1711845460494e4c908b5737cb5";
      let getRecords = thunkify(jsonp);
      let result = yield getRecords(url);
      console.log(result.data[0]);
      result.data.forEach(_this.showRecord);
      _this.state.records = result.data;
    }).then(function () {
      console.log('in then');
      _this.forceUpdate();
    }).catch(function (err){
      console.log('in catch: ' + err);
    });
  }

  render(){
    
    return (
      <div>
      {
        this.state.records.map( (record) => {
          let thumbnail_url = record.images.thumbnail.url;
          return <img src={thumbnail_url} />;
        })
      }
      </div>
    );
  }
}

export default MapPage;