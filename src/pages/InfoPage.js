import React,{useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom';
import { CssBaseline, Grid } from "@material-ui/core";
import Header from '../components/Header/Header';
import List from "../components/List/List";
import Map from "../features/Map/Map";
import { getPlacesData } from "../api";


const InfoPage = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        if (bounds) {
            getPlacesData(bounds.sw, bounds.ne)
                .then((data) => {
                    console.log(data);
                    setPlaces(data);
                });
            }
}, [coordinates, bounds]); //pass a second argument to useEffect that is the array of values that the effect depends on

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={4} md={6}>
                    <List places = {places}/>
                </Grid>
                <Grid item xs={8} md={6}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default InfoPage;