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
function CalcDate(rawData,type,duration){
  var endDate = new Date();
  var startDate = new Date();
  type==="day" ? startDate.setDate(endDate.getDate()-duration) : startDate.setHours(endDate.getHours()-duration);
  return filterLogs(rawData,startDate,endDate)
  }
function filterLogs(rawData,startDate,endDate){
var resultProductData = rawData.filter((product)=>{
  var date = new Date(product.createdAt.toString());
  return (date >= startDate && date <= endDate);
});
return resultProductData;
}  
  
export const filterLogReducer = (state={}, action)=>{
  var filteredData;
  switch (action.type){
    case "filterMonth":{
      // console.log("in switch",state.logs);
      filteredData = CalcDate(state.logs,"day",30);
      return state = {...state, filtered_logs:filteredData }  
    }

    case "filterWeek":{
      filteredData = CalcDate(state.logs,"day",7);
      return state = {...state, filtered_logs:filteredData }  
    }

    case "filterDay":{
      filteredData = CalcDate(state.logs,"day",2);
      return state = {...state, filtered_logs:filteredData }   
    }

    case "filterHour":{
    filteredData = CalcDate(state.logs,"hour",1); 
    return state = {...state, filtered_logs:filteredData }  
  }
  case "filterCustom":{
    filteredData = filterLogs(state.logs,new Date(action.startDate),new Date(action.endDate)); 
    return state = {...state, filtered_logs:filteredData }  
  }
  default: {return state=data}
}
} 
// to call dispatcher 
// dispatch({type:"filterMonth"});
// dispatch({type:"filterWeek"});
// dispatch({type:"filterDay"});
// dispatch({type:"filterHour"});
// dispatch({type:"filterCustom",startDate:"2018-08-28",endDate:"2018-09-28"});
