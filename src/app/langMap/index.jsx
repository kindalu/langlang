//AIzaSyABU2f43G_liBMY6iDOFmfytV6MAVvZdT0
import React, { PropTypes, Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import {default as InfoBox} from "react-google-maps/lib/addons/InfoBox";
import styles from './styles.scss';
import MapPhotoBox from '../mapPhotoBox';

class LangMap extends Component {

  render(){
    let records = this.props.records;
    let latlng = {lat: 25.0173405, lng: 121.5375631};
    return (
        <GoogleMapLoader
          
          containerElement={
            <div className={styles.mapContainer} />
          }
          
          googleMapElement={
            <GoogleMap
              defaultZoom={17}
              defaultCenter={latlng}
              >
              {
                records.map((record) => {
                  let lat_diff = Math.random()/200 - 0.0025;
                  let lng_diff = Math.random()/200 - 0.0025;
                  let myLatLng = new google.maps.LatLng(record.location.lat+lat_diff, record.location.lng+lng_diff); 
                  return (
                    <InfoBox
                      key = {record.id}
                      defaultPosition={myLatLng}
                      options={{closeBoxURL: "", enableEventPropagation: true}}>
                        <MapPhotoBox record={record}/>
                    </InfoBox>
                  );    
                })
              }
            </GoogleMap>
          }

        />
    );
  }
}

export default LangMap;