import { Grid } from "@mui/material";
import CityCard from "./CityCard";
import { selectAllCities } from "./citySlice"

const CityList = () => {
    const cities = selectAllCities();

    return (
        <Grid container>
            {cities.map((city) => {
                return (
                    <Grid item pr={2} pt={5}>
                        <CityCard city = {city}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default CityList;