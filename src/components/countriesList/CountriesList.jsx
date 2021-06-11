import { useSelector } from "react-redux";
import classes from "./CountriesList.module.scss";
import Country from "./country/Country";
import useCountriesByRegion from "../../hooks/useCountriesByRegion";
import SearchBar from "../UI/SearchBar";
const CountriesList = () => {
  //get all countries from store
  const countries = useSelector((state) => {
    return state.countries;
  });
  console.log(countries);
  //hook for selecting countries by continent
  const { region, handleChange } = useCountriesByRegion();
  return (
    <div className={classes.CountriesList}>
      <SearchBar />
      <div>
        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <ul>
        {countries.map((country) => (
          <Country key={country.alpha3Code} country={country} />
        ))}
      </ul>
    </div>
  );
};
export default CountriesList;
