import React from 'react';
import ReactDOM from 'react-dom';
import{Provider}from 'react-redux'
import{applyMiddleware,compose,createStore}from 'redux';
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import App from './App';
const store=createStore(reducers,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(

  <React.StrictMode>  
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


