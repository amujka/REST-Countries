import React from "react";
import { useSelector } from "react-redux";

import { useParams, NavLink, useHistory } from "react-router-dom";
import classes from "./CountryDetails.module.scss";

const CountryDetails = () => {
  let { name } = useParams();
  let history = useHistory();

  const country = useSelector((state) => {
    return state.countries.find((country) => country.alpha3Code === name);
  });
  if (country === undefined) {
    history.replace("/");
  }
  console.log(country);
  return (
    <div className={classes.CountryDetails}>
      <div className={classes.imgWrapper}>
        <img src={country.flag} />
      </div>

      <div className={classes.countryInfo}>
        <h2>{country.name}</h2>
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
        <ul className={classes.currencyList}>
          {country.currencies.map((currency) => {
            return (
              <li key={currency.code}>
                <span>Currency:</span> {currency.name}
              </li>
            );
          })}
        </ul>
        <p>
          <span>Calling code:</span> +{country.callingCodes[0]}
        </p>
        <p>
          <span>Border countries:</span>
        </p>
        <ul className={classes.neighboursList}>
          {country.borders.map((border) => {
            return (
              <li key={border}>
                <NavLink to={`/country-details/${border}`}>{border}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
