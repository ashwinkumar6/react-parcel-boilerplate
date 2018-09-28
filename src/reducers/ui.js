// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';
import data from "../assets/data"


export default (state={}, action) => {
  console.log("state in reducer",state);
  // switch (action.type) {
  // case UI_ACTIONS.UPDATE_NAME:
  //   return { ...state, userName: action.data };
  // case UI_ACTIONS.INCREMENT_COUNT:
  //   return { ...state, count: action.data };
  // default:
  return state;
  // }
};

// used for sorting may be shifted to utils
function filterLogs(rawData,days){
  var endDate = new Date(Date.now());
  var startDate = new Date();
  startDate.setDate(startDate.getDate()-days);
  var resultProductData = rawData.filter((product)=>{
    var date = new Date(product.date.toString());
    return (date >= startDate && date <= endDate);
  });
  return resultProductData;
  }
  
export const filterLogReducer = (state={}, action)=>{
  var filteredData;
  switch (action.type){
    case "filterMonth":{
      filteredData = filterLogs(state.logs,30);
      return state = {...state, filtered_logs:filteredData }  
    }

    case "filterWeek":{
      filteredData = filterLogs(state.logs,7);
      return state = {...state, filtered_logs:filteredData }  
    }

    case "filterDay":{
      filteredData = filterLogs(state.logs,1);
      return state = {...state, filtered_logs:filteredData }   
    }

    case "filterHour":{
    filteredData = filterLogs(state.logs,action.payload); //check logic for 1h
    return state = {...state, filtered_logs:filteredData }  //update parameter
  }
  //setting initial state via reducer
  default: {return state=data}
}
} 

// to call dispatcher 
//dispatch({type:"filterMonth"});
//dispatch({type:"filterWeek"});
//dispatch({type:"filterDay"});