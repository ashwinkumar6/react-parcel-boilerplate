// consider data logs sample
const logs = [
  {
  "createdAt": "2018-09-28T05:27:27.242Z",
  "peer_requester": {
    "ip": "182.74.140.194",
    "nat_type": "EIM",
    "os": "win64",
    "geo_info": {
      "region": "Karnataka",
      "region_code": "KA",
      "country": "IN",
      "country_name": "India"
    }
  },
  "peer_responder": {
    "ip": "84.160.11.231",
    "nat_type": "EIM",
    "os": "win",
    "geo_info": {
      "region": "Baden-Württemberg Region",
      "region_code": "BW",
      "country": "DE",
      "country_name": "Germany"
    }
  },
  "is_direct_successful": false,
  "utp_hole_punch_result": {
    "Succeeded": {
      "time_spent": {
        "secs": 0,
        "nanos": 0
      }
    }
  },
  "tcp_hole_punch_result": "success"
},
{
  "createdAt": "2018-09-28T05:27:27.242Z",
  "peer_requester": {
    "ip": "182.74.140.194",
    "nat_type": "EIM",
    "os": "win64",
    "geo_info": {
      "region": "Karnataka",
      "region_code": "KA",
      "country": "IN",
      "country_name": "India"
    }
  },
  "peer_responder": {
    "ip": "84.160.11.231",
    "nat_type": "EIM",
    "os": "win",
    "geo_info": {
      "region": "Baden-Württemberg Region",
      "region_code": "BW",
      "country": "DE",
      "country_name": "Germany"
    }
  },
  "is_direct_successful": false,
  "utp_hole_punch_result": {
    "Succeeded": {
      "time_spent": {
        "secs": 0,
        "nanos": 0
      }
    }
  },
  "tcp_hole_punch_result": "success"
},
{
  "createdAt": "2018-09-28T05:27:27.242Z",
  "peer_requester": {
    "ip": "182.74.140.194",
    "nat_type": "EIM",
    "os": "win64",
    "geo_info": {
      "region": "Karnataka",
      "region_code": "KA",
      "country": "IN",
      "country_name": "India"
    }
  },
  "peer_responder": {
    "ip": "84.160.11.231",
    "nat_type": "EIM",
    "os": "win",
    "geo_info": {
      "region": "Baden-Württemberg Region",
      "region_code": "BW",
      "country": "DE",
      "country_name": "Germany"
    }
  },
  "is_direct_successful": false,
  "utp_hole_punch_result": {
    "Succeeded": {
      "time_spent": {
        "secs": 0,
        "nanos": 0
      }
    }
  },
  "tcp_hole_punch_result": "success"
}
]
const filtered_logs = [{}]

export default {
  logs,
  filtered_logs,
}
