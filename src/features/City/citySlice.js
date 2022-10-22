import {CITIES} from './City';

export const selectAllCities = () => {
    return CITIES;
};

export const selectCityById = (id) => {
    return CITIES.find((city) => city.id === parseInt(id));
};