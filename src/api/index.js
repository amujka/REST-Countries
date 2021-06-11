import Axios from 'axios';

const URL="https://restcountries.eu/rest/v2"
export const getCountries=()=>Axios.get(`${URL}/all`);

export const getByRegion=(region)=>Axios.get(`${URL}/region/${region}`)

export const getByName=(name)=>Axios.get(`${URL}/name/${name}`)

