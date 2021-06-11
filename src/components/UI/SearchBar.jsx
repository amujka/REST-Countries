import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByNameAction } from "../../store/actions/countriesActions";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== "") {
      dispatch(getCountriesByNameAction(search));
    }
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
