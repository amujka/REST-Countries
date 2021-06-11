import React from "react";
import classes from "./Country.module.scss";
const Country = ({ country }) => {
  return (
    <li>
      <h3>{country.name}</h3>
      <img src={country.flag} alt="" />
      <p>{country.capital}</p>
    </li>
  );
};

export default Country;
