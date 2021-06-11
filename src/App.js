import React from 'react'
import{getCountriesAction} from './store/actions/countriesActions' 
import {useEffect}from 'react'
import { useDispatch } from 'react-redux'
import CountriesList from './components/countriesList/CountriesList'
import Header from './components/UI/header/Header'
const App = () => {
        const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getCountriesAction())
    }, [dispatch])
    return (
        <div className="App">
        <Header/>
           <CountriesList/>
        </div>
    )
}

export default App
