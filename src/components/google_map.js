import React from 'react';
import {GoogleMap, GoogleMapLoader} from 'react-google-maps'

export default (props) => {
    return (
            <GoogleMapLoader
                containerElement={ <div style={{height: '100%', width: '100%' }}/>}
                googleMapElement={
                    <GoogleMap
                        defaultZoom={10}
                        defaultCenter={ { lat: props.lat, lng: props.lng } }
                    />
                }/>
    );
}