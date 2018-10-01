import { combineReducers } from 'redux';
import {serverLogReducer,filterLogReducer,filterResultReducer} from './ui';
//import {filterLogReducer} from "./ui"

const rootReducer = combineReducers({
  logs: serverLogReducer,
  filtered_logs: filterLogReducer,
  result_logs: filterResultReducer
});

export default rootReducer;
