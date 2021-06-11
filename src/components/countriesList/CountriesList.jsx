import { useSelector } from "react-redux";
import classes from "./CountriesList.module.scss";
import Country from "./country/Country";
import SearchBar from "../UI/SearchBar";
import SelectInput from "../UI/selectInput/SelectInput";
const CountriesList = () => {
  //get all countries from store
  const countries = useSelector((state) => {
    return state.countries;
  });
  //console.log(countries);

  return (
    <div className={classes.container}>
      <div className={classes.inputWrapper}>
        <SearchBar />
        <SelectInput />
      </div>
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <Country key={country.alpha3Code} country={country} />
          ))}
        </ul>
      ) : (
        <h1 className={classes.loading}>Loading...</h1>
      )}
    </div>
  );
};
export default CountriesList;
