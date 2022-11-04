import React,{useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom';
import { CssBaseline, Grid } from "@material-ui/core";
import Header from '../components/Header/Header';
import List from "../components/List/List";
import Map from "../features/Map/Map";
import { getPlacesData } from "../api";
import SideBar from "../components/SideBar/SideBar";

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
            {/* <SideBar /> */}
            <Grid container spacing={3} justifyContent='center' style={{ width: '100%' }}>
                <Grid item xs={3} md={3}>
                    <List places = {places}/>
                </Grid>
                <Grid item xs={8} md={5}>
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