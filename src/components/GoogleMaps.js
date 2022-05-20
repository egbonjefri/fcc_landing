import React, {useState} from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

function GoogleMap (props) {
    const style = {
        height: '25%',
        width: '100%',
        display: 'block',
        position: 'relative',
        margin: '0'
        }
 
    const [infoWindow, setInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    const coordinates = { lat: 49.905570, lng: -97.164703, address: '852 Bannatyne Avenue' };
    let onMarkerClick = ((props, marker, e) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setInfoWindow(true);
    }) 
    let onMapClick = ((props) => {
        if (infoWindow) {
            setInfoWindow(false);
            setActiveMarker(null)
        }
    })
    return (
        <div>
            <Map
            google={props.google}
            zoom={15}
            onClick={onMapClick}
            style={style}
            initialCenter={coordinates}
            />
            <Marker
            title={'Our Headquarteres...'}
            name={'Come pay us a visit'}
            onClick={onMarkerClick}
            position={coordinates}
            />
            <InfoWindow
            marker={activeMarker}
            visible={infoWindow}>
            <div>
                <h1>{selectedPlace.name}</h1>
            </div>
            </InfoWindow>
  
        </div>
    )
}
export default GoogleApiWrapper({apiKey: 'AIzaSyCDpc6MphhqUXZVEiQ_b1TZjTCU6gyK6QI'})(GoogleMap);