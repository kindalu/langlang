import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import co from 'co';
import request from 'superagent';
import thunkify from 'thunkify';
import jsonp from 'jsonp';
import HeaderBar from './headerBar';
import LangBox from './langBox';
import LangMap from './langMap';
import SearchBar from './searchBar';

class MapPage extends Component {

  state = {records:[]};

  printRecord(record){
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
    let _this = this;
    let token = "23865487.1677ed0.b276f1711845460494e4c908b5737cb5";

    co(function *(){ 

      let getData = thunkify(jsonp);
      let langArray = [];

      let lang_data_url = "https://api.instagram.com/v1/tags/浪浪/media/recent?access_token=" + token;

      let ntuLoc=[
        [25.0173405, 121.5375631],
        [25.0193405, 121.5395631],
        [25.0153405, 121.5355631],
        [25.0153405, 121.5395631],
        [25.0193405, 121.5355631],
      ];
      let locArray = [];
      let langIdx = 0;
      for(let idx = 0; idx<5; idx++){
        
        let langs = yield getData(lang_data_url);
        langs.data.forEach((lang) => {
          langArray.push(lang);
        });
        lang_data_url = langs.pagination.next_url;

        let ntuLocUrl = 'https://api.instagram.com/v1/locations/search?count=20&distance=300&lat='+ntuLoc[idx][0]+'&lng='+ntuLoc[idx][1]+'&access_token='+token;
        let locs = yield getData(ntuLocUrl);
        locs.data.forEach((loc) => {
          langArray[langIdx].location = {};
          langArray[langIdx].location.lat = loc.latitude;
          langArray[langIdx].location.lng = loc.longitude;
          langIdx++;
        });
        _this.setState({records:langArray});
      };
      //_this.state.records = langArray;
      console.log(langArray);
      langArray.forEach(_this.printRecord);
    }).then(() => {
      console.log('getData順利');
      _this.forceUpdate();
    }).catch((err) => {
      console.log('getData失敗：' + err);
    });
  }

  render(){
    
    return (
      <div className={styles.mapPage}>
        {/* 地圖頁 - 搜尋列 */}
        <SearchBar/>

        {/* 地圖頁 - 左邊浪浪紀錄列表 */}
        <div className={styles.langBoxContainer}>
          {
            this.state.records.map( (record) => {
              return <LangBox key={record.images.thumbnail.url} record={record}/>;
            })
          }
        </div>

        {/* 地圖頁 - GoogleMap */}
        <LangMap records={this.state.records}/>
      </div>
    );
  }
}

export default MapPage;