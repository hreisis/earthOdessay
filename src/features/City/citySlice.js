import { CITIES } from "./City";
import { db, auth } from "../../firebase/config";
import { ref, onValue } from "firebase/database";

export const cityDb = () => {
  const userDb = ref(db, `/userData/${auth.currentUser.uid}`);
  onValue(userDb, (snapshot) => {
    const data = snapshot.val();
    const cityData = Object.values(data);
    console.log(cityData);  console.log(CITIES);
  });
};

export const selectAllCities = () => {

  return CITIES;
};

export const selectCityById = (id) => {
  return CITIES.find((city) => city.id === parseInt(id));
};
