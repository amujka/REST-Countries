import React from 'react'
import{getCountriesAction} from './store/actions/countriesActions' 
import {useEffect}from 'react'
import { useDispatch } from 'react-redux'
import CountriesList from './components/countriesList/CountriesList'
const App = () => {
        const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getCountriesAction())
    }, [dispatch])
    return (
        <div>
           <CountriesList/>
        </div>
    )
}

export default App
