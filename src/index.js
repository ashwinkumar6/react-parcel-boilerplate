import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import { BrowserRouter, Route} from 'react-router-dom';
// import data from "./assets/data"

function configureStore(initialState) {
  return createStore(
    rootReducer, initialState,
    applyMiddleware(thunk)
  );
}

const store = configureStore({});
const reactRoot = document.getElementById('react-root');

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
    <Route component={App}/>
    </BrowserRouter>
  </Provider>
  , reactRoot);
