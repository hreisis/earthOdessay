import React from 'react'; 
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import GoogleMapReact from 'google-map-react';
import Rating from '@material-ui/lab';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import useStyles from './styles';

const Map = ( { setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)') ;

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD9GZFcDNKVzRS98zsWcp2Zj6cD3d98gj4'}}
                defaultCenter = {coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
                >
                </GoogleMapReact>
        </div>
    );
}

export default Map;