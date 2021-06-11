import * as api from '../../api'
export const getCountriesAction= ()=>async(dispatch)=>{
    try {
        const {data}= await api.getCountries();
        //console.log(data);
        dispatch({
            type:"GET_COUNTRIES",
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}
export const getCountriesByRegionAction=(region)=>async(dispatch)=>{
    try {
        const{data}=await api.getByRegion(region)
        dispatch({
            type:"GET_BY_REGION",
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getCountriesByNameAction=(name)=>async(dispatch)=>{
    try {
       
        const {data}=await api.getByName(name)
        dispatch({
            type:"GET_BY_NAME",
            payload:data
        })
    } catch (error) {
        console.log(error);
    }

}