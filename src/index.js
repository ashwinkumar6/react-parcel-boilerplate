import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import { BrowserRouter, Route} from 'react-router-dom';


function configureStore(initialState) {
  return createStore(
    rootReducer, initialState,
    applyMiddleware(thunk)
  );
}

const data = {
  "logs":{"id":"20812",
  "user":{
    "requester":{
      "ip":"127.0.0.1",
      "nat_type":"EIM",
     "os":"linux"
  },
  "responder":{
     "ip":"127.0.0.1",
     "nat_type":"EIM",
     "os":"linux"
  }
  },
  "connection_types":{
   "direct":"true",
     "utp_hp":{
     "Succeeded":{
        "time_spent":{
           "secs":0,
           "nanos":0
        }
     }
  },
    "tcp_hp": "Failed"
  }
}
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
