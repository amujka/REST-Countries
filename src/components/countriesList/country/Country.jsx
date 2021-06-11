import React from "react";
import classes from "./Country.module.scss";
const Country = ({ country }) => {
  return (
    <li className={classes.Country}>
      <img src={country.flag} alt="" />
      <h3>{country.name}</h3>
      <p>{country.capital}</p>
      <p>{country.population}</p>
      <small>{country.region}</small>
    </li>
  );
};

export default Country;
