import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/v2/list'



export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
            params: {currency: 'USD', units: 'km', lang: 'en_US'},
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'a854bec12fmsh05405c8998b6368p107408jsn2bd8f2b4365c',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }}
            );
        return data;
    } catch (error) {
        console.log(error)
    }
}