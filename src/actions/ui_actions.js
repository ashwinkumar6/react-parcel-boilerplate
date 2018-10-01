import { UI_ACTIONS } from '../constants/action_types';

export function filterMonth() {
  return (dispatch,getState) => {
    dispatch({type:"filterMonth",data: getState().logs});
    if(getState().result_logs.recent) dispatch({type:getState().result_logs.recent,data: getState().filtered_logs.data});
    else dispatch({type:"filterAllResult", data: getState().filtered_logs.data}); 
  };
}

// copy this to other actions
export function filterWeek() {
  return (dispatch,getState) => {
    dispatch({type:"filterWeek",data: getState().logs});
    if(getState().result_logs.recent) dispatch({type:getState().result_logs.recent,data: getState().filtered_logs.data}); 
    else dispatch({type:"filterAllResult", data: getState().filtered_logs.data});  
  };
}

export function filterDay() {
  return (dispatch,getState) => {
    dispatch({type:"filterDay",data: getState().logs});
    if(getState().result_logs.recent) dispatch({type:getState().result_logs.recent,data: getState().filtered_logs.data});  
    else dispatch({type:"filterAllResult", data: getState().filtered_logs.data}); 
  };
}

export function filterHour() {
  return (dispatch,getState) => {
    dispatch({type:"filterHour",data: getState().logs});
    if(getState().result_logs.recent) ispatch({type:getState().result_logs.recent,data: getState().filtered_logs.data}); 
    else dispatch({type:"filterAllResult", data: getState().filtered_logs.data});  
  };
}

export function filterCustom(startDate,endDate) {
  return (dispatch,getState) => {
    dispatch({type:"filterCustom",data: getState().logs,startDate:startDate,endDate:endDate}); //format:"2018-09-28"
    if(getState().result_logs.recent) dispatch({type:getState().result_logs.recent,data: getState().logs}); 
    else dispatch({type:"filterAllResult", data: getState().filtered_logs.data});  
  };
}

export function filterSuccessfulResult() {
  return (dispatch,getState) => {
    dispatch({type:"resultSuccessful",data: getState().filtered_logs.data});  
  };
}

export function filterFailedResult() {
  return (dispatch,getState) => {
    dispatch({type:"resultFailed",data: getState().filtered_logs.data});  
  };
}
export function filterAllResult() {
  return (dispatch,getState) => {
    dispatch({type:"resultAll",data: getState().filtered_logs.data});  
  };
}
