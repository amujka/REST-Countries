import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCountriesAction,
  getCountriesByRegionAction,
} from "../store/actions/countriesActions";

const useCountriesByRegion = () => {

  const [region, setRegion] = useState("all");
  const handleChange=(region)=>{
       setRegion(region)
  }

  const dispatch = useDispatch();


  useEffect(() => {
    if (region === "all") {
      dispatch(getCountriesAction());
    } else {
      dispatch(getCountriesByRegionAction(region));
    }
  }, [region]);
    return  {   
        region,handleChange
    }
}

export default useCountriesByRegion
