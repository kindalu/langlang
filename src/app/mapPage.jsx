import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import co from 'co';
import request from 'superagent';
import thunkify from 'thunkify';
import jsonp from 'jsonp';
import 標頭列 from './headerBar';
import {default as SimpleMap} from "./SimpleMap";


class 地圖頁 extends Component {

  state = {records:[]};

  印資料(record){
    console.log('username:' + record.user.username);
    console.log('profile_pic_url:' + record.caption.from.profile_picture);
    console.log('caption:'+ record.caption.text);
    let date = new Date(parseInt(record.created_time));
    console.log('time:'+date );
    console.log('pic_url:'+record.images.thumbnail.url);
    console.log('link:'+record.link);
    console.log('lat/long:'+record.location.lat+'/'+record.location.lng);
  }

  constructor(props, context){
    super(props, context);
    let 這 = this;
    let 存取碼 = "23865487.1677ed0.b276f1711845460494e4c908b5737cb5";

    co(function *(){ 

      let 抓資料 = thunkify(jsonp);
      let 浪浪陣列 = [];

      let 浪浪_資料網址 = "https://api.instagram.com/v1/tags/浪浪/media/recent?access_token=" + 存取碼;

      let 台大點=[
        [25.0173405, 121.5375631],
        [25.0193405, 121.5395631],
        [25.0153405, 121.5355631],
        [25.0153405, 121.5395631],
        [25.0193405, 121.5355631],
      ];
      let 點位陣列 = [];
      let langIdx = 0;
      for(let idx = 0; idx<2; idx++){
        
        let 浪浪們 = yield 抓資料(浪浪_資料網址);
        浪浪們.data.forEach((浪浪) => {
          浪浪陣列.push(浪浪);
        });
        浪浪_資料網址 = 浪浪們.pagination.next_url;

        let 台大附近地點_資料網址 = 'https://api.instagram.com/v1/locations/search?count=20&distance=300&lat='+台大點[idx][0]+'&lng='+台大點[idx][1]+'&access_token='+存取碼;
        let 點位們 = yield 抓資料(台大附近地點_資料網址);
        點位們.data.forEach((obj) => {
          浪浪陣列[langIdx].location = {};
          浪浪陣列[langIdx].location.lat = obj.latitude;
          浪浪陣列[langIdx].location.lng = obj.longitude;
          langIdx++;
        });
        這.setState({records:浪浪陣列});
      };
      //這.state.records = 浪浪陣列;
      console.log(浪浪陣列);
      浪浪陣列.forEach(這.印資料);
    }).then(() => {
      console.log('抓資料順利');
      //這.forceUpdate();
    }).catch((錯誤) => {
      console.log('抓資料失敗：' + 錯誤);
    });
  }

  render(){
    
    return (
      <div>
        <標頭列/>
        <div className='pure-g'>
          <div className='pure-u-1' style={{backgroundColor:'#eff'}}>
            <div style={{height:'2em'}}>
              <p>abcdeffffff</p>
            </div>
          </div>
          <div className='pure-u-1-4' style={{height:'70%'}}>
            {
              this.state.records.map( (紀錄) => {
                let 小圖網址 = 紀錄.images.thumbnail.url;
                return <img src={小圖網址} style={{border:'2px solid black'}}/>;
              })
            }
          </div>
          <div className='pure-u-3-4' style={{backgroundColor:'lightGray'}}>
            <SimpleMap/>
          </div>
        </div>
      </div>
    );
  }
}

//https://api.instagram.com/v1/locations/825607747/media/recent?access_token=23865487.1677ed0.b276f1711845460494e4c908b5737cb5
//https://api.instagram.com/v1/media/search/?count=100&distance=500&lat=25.027847300000026&lng=121.52693370619042&client_id=f940a50c858c4ebab8d9e8cd3de0f508&callback=jQuery21302612382802180946_1453012336441&_=1453012336444
//let userUrl = "https://api.instagram.com/v1/users/268418872/media/recent/?access_token=" + token;


export default 地圖頁;