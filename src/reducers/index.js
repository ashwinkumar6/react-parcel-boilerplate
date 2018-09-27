import { combineReducers } from 'redux';
import ui from './ui';
//import {filterLogReducer} from "./ui"

const reducers = {
  //filterLogReducer
  ui
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
