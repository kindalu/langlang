//AIzaSyABU2f43G_liBMY6iDOFmfytV6MAVvZdT0
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function SimpleMap (props) {
  return (
      <GoogleMapLoader
        containerElement={
          <div className='pure-u-3-4'
            style={{
              height: "1000px",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={17}
            defaultCenter={{lat: 25.0173405, lng: 121.5375631}}
            >
          </GoogleMap>
        }
      />
  );
}