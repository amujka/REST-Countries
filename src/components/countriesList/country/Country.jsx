import React from "react";
import classes from "./Country.module.scss";
import { NavLink } from "react-router-dom";
const Country = ({ country }) => {
  return (
    <li className={classes.Country}>
      <NavLink to={`/country-details/${country.alpha3Code}`}>
        <img src={country.flag} alt="" />
        <div className={classes.countryInfo}>
          <h3>{country.name}</h3>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
          <p>
            <span>Population: </span>
            {country.population}
          </p>
          <small>
            <span>Region: </span>
            {country.region}
          </small>
        </div>
      </NavLink>
    </li>
  );
};
export default Country;
