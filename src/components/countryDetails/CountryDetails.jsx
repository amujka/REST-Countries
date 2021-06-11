import React from "react";
import { useSelector } from "react-redux";

import { useParams, NavLink, useHistory, useLocation } from "react-router-dom";
import classes from "./CountryDetails.module.scss";

const CountryDetails = () => {
  let { name } = useParams();
  let history = useHistory();
  let location = useLocation();
  const country = useSelector((state) => {
    return state.countries.find((country) => country.alpha3Code === name);
  });
  if (country === undefined) {
    history.replace("/");
  }
  console.log({ country });
  console.log({ history });
  console.log({ location });

  return (
    <div className={classes.CountryDetails}>
      <img src={country.flag} alt="" />
      <div className={classes.countryInfo}>
        <h3>{country.name}</h3>
        <p>
          <span>Native name:</span>
          {country.nativeName}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Region: </span>
          {country.subregion}
        </p>
        <ul>
          {country.borders.map((border) => {
            return (
              <li key={border}>
                <NavLink to={`/country-details/${border}`}>{border}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul>
          {country.currencies.map((currency) => {
            return (
              <li key={currency.code}>
                <span>Currency:</span> {currency.name}
              </li>
            );
          })}
        </ul>
        <p>
          <span>Calling code:</span>+ {country.callingCodes[0]}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
