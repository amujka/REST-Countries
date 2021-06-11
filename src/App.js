import React from 'react'
import{getCountriesAction} from './store/actions/countriesActions' 
import {useEffect}from 'react'
import { useDispatch } from 'react-redux'
import CountriesList from './components/countriesList/CountriesList'
import Header from './components/UI/header/Header'
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect,} from 'react-router-dom'
import CountryDetails from './components/countryDetails/CountryDetails'

const App = () => {
        const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getCountriesAction())
    }, [dispatch])
    return (
        <Router>
        <div className="App">
        <Header/>
        <Switch>
        <Route path="/" exact>
          <CountriesList/>
        </Route>    
         <Route path="/country-details/:name" >
           <CountryDetails/>
        </Route> 
        <Route path="*" >
          <Redirect to="/"/>
        </Route>
       
        </Switch>
        </div>

        </Router>
    )
}

export default App
