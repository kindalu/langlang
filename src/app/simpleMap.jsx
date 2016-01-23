//AIzaSyABU2f43G_liBMY6iDOFmfytV6MAVvZdT0
import React, { PropTypes, Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import {default as InfoBox} from "react-google-maps/lib/addons/InfoBox";

class SimpleMap extends Component {

  render(){
    let records = this.props.records;
    let latlng = {lat: 25.0173405, lng: 121.5375631};
  
    return (
        <GoogleMapLoader
          
          containerElement={
            <div className='pure-u-4-5'
              style={{
                height: "1000px",
              }}
            />
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
                        <a href={record.link} target="_blank">
                          <div style={{width:'56px', height:'56px', borderRadius:'6px', border: '3px solid #555'}}>
                            <img ref={record.id} src={record.images.thumbnail.url} style={{height:'50px',width:'50px'}}/>
                          </div>
                        </a>
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

export default SimpleMap;