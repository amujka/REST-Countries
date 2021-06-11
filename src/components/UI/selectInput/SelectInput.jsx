import React from "react";
import useCountriesByRegion from "../../../hooks/useCountriesByRegion";
import classes from "./SelectInput.module.scss";
const SelectInput = () => {
  //hook for selecting countries by continent
  const { region, handleChange } = useCountriesByRegion();
  return (
    <select
      className={classes.SelectInput}
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
  );
};

export default SelectInput;
