// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';


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


function filterLogs(state={},days){
  var endDate = new Date(Date.now());
  var startDate = new Date();
  startDate.setDate(startDate.getDate()-days);
  var resultProductData = state.filtered_logs.filter(function (product) {
    var date = new Date(product.ProductHits.toString());
    return (date >= startDate && date <= endDate);
  });
  return resultProductData;
  }
  
  export const filterLogReducer = (state={}, action)=>{
    switch (action.type){
      case "filterMonth":{
        var filteredData = filterLogs(state,30);
        state = {...state, filtered_logs:filteredData }  
        break;
      }

      case "filterWeek":{
        var filteredData = filterLogs(state,7);
        state = {...state, filtered_logs:filteredData }  
        break;
      }

      case "filterDay":{
        var filteredData = filterLogs(state,1);
        state = {...state, filtered_logs:filteredData }  
        break;  
      }

      case "filterHour":{
      var filteredData = filterLogs(state,1); //change logic
      state = {...state, filtered_logs:filteredData }  
      break;
    }
  }
} 
