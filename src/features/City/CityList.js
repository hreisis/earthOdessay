import { Grid } from "@mui/material";
import CityCard from "./CityCard";
import { selectAllCities } from "./citySlice";
import { db, auth } from "../../firebase/config";
import { ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";

const CityList = () => {
  //const cities = selectAllCities();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    onValue(ref(db, `/userData/${auth.currentUser.uid}`), (snapshot) => {
      setCities([]);
      const data = snapshot.val();
      //console.log(data);
      if (data !== null) {
        Object.values(data).map((city) => {
          setCities((oldArray) => [...oldArray, city]);
        });
      }
      //console.log(cities);
    });
  }, []);

  //const cities = selectAllCities();

  return (
    <Grid container>
      {cities.map((city) => {
        return (
          <Grid item pr={2} pt={5}>
            <CityCard city={city} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CityList;
