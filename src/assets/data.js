// consider data logs sample
const logs=[
    {    
      "id":"20801",
      "date": "2018-09-27T00:00:00.000Z",
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
  },
  {
      "id":"20802",
      "date": "2018-09-22T00:00:00.000Z",
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
  },
  {
      "id":"20803",
      "date": "2018-08-30T00:00:00.000Z",
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
]

const filtered_logs ={
        "id":null,
        "date": null,
      "user":{
        "requester":{
          "ip":null,
          "nat_type":null,
         "os":null
      },
      "responder":{
         "ip":null,
         "nat_type":null,
         "os":null
      }
      },
      "connection_types":{
       "direct":null,
         "utp_hp":{
         "Succeeded":{
            "time_spent":{
               "secs":0,
               "nanos":0
            }
         }
      },
        "tcp_hp": null
      }    
}  

export default {
    logs,
    filtered_logs,
}
