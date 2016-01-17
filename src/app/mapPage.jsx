import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import co from 'co';
import request from 'superagent';
import thunkify from 'thunkify';
import jsonp from 'jsonp';

class 地圖頁 extends Component {

  state = {records:[]};

  印資料(record){
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
    let 這 = this;
    let 存取碼 = "23865487.1677ed0.b276f1711845460494e4c908b5737cb5";

    co(function *(){ 
      let 浪浪_資料網址 = "https://api.instagram.com/v1/tags/浪浪/media/recent?access_token=" + 存取碼;
      let 台大附近地點_資料網址 = 'https://api.instagram.com/v1/locations/search?count=100&distance=500&lat=25.0173405&lng=121.5375631&access_token='+存取碼;

      let 抓資料 = thunkify(jsonp);
      let 浪浪 = yield 抓資料(浪浪_資料網址);
      let 台大附近點位 = yield 抓資料(台大附近地點_資料網址);
      console.log(浪浪.data[0]);
      浪浪.data.forEach(這.印資料);
      這.state.records = 浪浪.data;
    }).then(() => {
      console.log('抓資料順利');
      這.forceUpdate();
    }).catch((錯誤) => {
      console.log('抓資料失敗：' + 錯誤);
    });
  }

  render(){
    
    return (
      <div>
      {
        this.state.records.map( (紀錄) => {
          let 小圖網址 = 紀錄.images.thumbnail.url;
          return <img src={小圖網址} />;
        })
      }
      </div>
    );
  }
}

//https://api.instagram.com/v1/locations/825607747/media/recent?access_token=23865487.1677ed0.b276f1711845460494e4c908b5737cb5
//https://api.instagram.com/v1/media/search/?count=100&distance=500&lat=25.027847300000026&lng=121.52693370619042&client_id=f940a50c858c4ebab8d9e8cd3de0f508&callback=jQuery21302612382802180946_1453012336441&_=1453012336444
//let userUrl = "https://api.instagram.com/v1/users/268418872/media/recent/?access_token=" + token;


export default 地圖頁;