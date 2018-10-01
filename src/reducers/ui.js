// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';
import data from "../assets/data"

// used for sorting may be shifted to utils
function CalcDate(actionType,rawData,type,duration){
  var endDate = new Date();
  var startDate = new Date();
  type==="day" ? startDate.setDate(endDate.getDate()-duration) : startDate.setHours(endDate.getHours()-duration);
  return filterLogs(actionType,rawData,startDate,endDate)
  }
function filterLogs(actionType,rawData,startDate,endDate){
var resultProductData = rawData.filter((product)=>{
  var date = new Date(product.createdAt.toString());
  return (date >= startDate && date <= endDate);
});
return{
  "recent":actionType,
  "data":resultProductData
}
}  

function resultLogs(actionType,rawData,type){
var resultProductData = rawData.filter((product)=>{
  var direct = product.is_direct_successful.toString();
  var utp = product.utp_hole_punch_result.Succeeded;
  var tcp = product.tcp_hole_punch_result.Succeeded;
  return type==="resultFailed"? ( (direct==="false") && !(utp)&& !(tcp) ) : ( (direct==="true") || utp || tcp ) ; 
});

return{
  "recent":actionType,
  "data":resultProductData
}
}  



export const filterLogReducer = (state=[], action)=>{
  var filteredData;
  switch (action.type){
    case "filterMonth":{
      filteredData = CalcDate("filterMonth",action.data,"day",30);
      //return state = {...state, object1 }  
      return Object.assign([],filteredData);
    }

    case "filterWeek":{
      filteredData = CalcDate("filterWeek",action.data,"day",7);      
      return Object.assign([],filteredData);
    } 

    case "filterDay":{
      filteredData = CalcDate("filterDay",action.data,"day",1);
      return Object.assign([],filteredData);
    }

    case "filterHour":{
    filteredData = CalcDate("filterHour",action.data,"hour",1); 
    return Object.assign([],filteredData);
  }
  case "filterCustom":{
    filteredData = filterLogs("filterCustom",action.data,new Date(action.startDate),new Date(action.endDate)); 
    return Object.assign([],filteredData);
  }
  default: return state=data.logs;
}
} 

export const filterResultReducer = (state=[], action)=>{
var resultData;
switch (action.type){
  case "resultSuccessful":{
    resultData = resultLogs("resultSuccessful",action.data,"resultSuccessful");
    return Object.assign([],resultData);
    //return state = {...state, result_logs:resultData }  
  }

  case "resultFailed":{
    resultData = resultLogs("resultFailed",action.data,"resultFailed");
    return Object.assign([],resultData);
  }

  case "resultAll":{
    var addRecent= {
      "recent":"resultAll",
      "data":action.data
    }    
    return Object.assign([],addRecent );
  }

  default: return state=data.logs;
}
} 

export const serverLogReducer = (state={}, action)=>{
  return state=data.logs; 
} 
  