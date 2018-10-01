// consider data logs sample
const logs = [
    {
      "createdAt": "2018-09-01T05:27:27.242Z",
      peer_requester: {
        ip: "182.74.140.194",
        nat_type: "EIM",
        os: "win64",
        geo_info: {
          region: "Karnataka",
          region_code: "KA",
          country: "IN",
          country_name: "India"
        }
      },
      peer_responder: {
        ip: "84.160.11.231",
        nat_type: "EDM",
        os: "win",
        geo_info: {
          region: "Baden-Württemberg Region",
          region_code: "BW",
          country: "DE",
          country_name: "Germany"
        }
      },
      is_direct_successful: true,
      utp_hole_punch_result: {
        Succeeded: {
          time_spent: {
            secs: 1,
            nanos: 14
          }
        }
      },
      tcp_hole_punch_result: "success"
    },
    {
      "createdAt": "2018-09-24T05:27:27.242Z",
      peer_requester: {
        ip: "182.74.140.194",
        nat_type: "EIM",
        os: "win64",
        geo_info: {
          region: "Karnataka",
          region_code: "KA",
          country: "IN",
          country_name: "Scotland"
        }
      },
      peer_responder: {
        ip: "84.160.11.231",
        nat_type: "EIM",
        os: "Mac OS",
        geo_info: {
          region: "Baden-Württemberg Region",
          region_code: "BW",
          country: "DE",
          country_name: "UK"
        }
      },
      is_direct_successful: false,
      utp_hole_punch_result: {

      },
      tcp_hole_punch_result: "failure"
    },
    {
      "createdAt": "2018-09-27T05:27:27.242Z",
      peer_requester: {
        ip: "182.74.140.194",
        nat_type: "EDM",
        os: "Mac OS",
        geo_info: {
          region: "Karnataka",
          region_code: "KA",
          country: "IN",
          country_name: "Scotland"
        }
      },
      peer_responder: {
        ip: "84.160.11.231",
        nat_type: "EIM",
        os: "Linux",
        geo_info: {
          region: "Baden-Württemberg Region",
          region_code: "BW",
          country: "DE",
          country_name: "France"
        }
      },
      is_direct_successful: true,
      utp_hole_punch_result: {

      },
      tcp_hole_punch_result: "success"
    },
    {
      createdAt: "2018-09-30T05:27:27.242Z",
      peer_requester: {
        ip: "182.74.140.194",
        nat_type: "EDM",
        os: "Linux",
        geo_info: {
          region: "Karnataka",
          region_code: "KA",
          country: "IN",
          country_name: "USA"
        }
      },
      peer_responder: {
        ip: "84.160.11.231",
        nat_type: "EDM",
        os: "Mac OS",
        geo_info: {
          region: "Baden-Württemberg Region",
          region_code: "BW",
          country: "DE",
          country_name: "India"
        }
      },
      is_direct_successful: true,
      utp_hole_punch_result: {
        Succeeded: {
          time_spent: {
            secs: 0,
            nanos: 36
          }
        }
      },
      tcp_hole_punch_result: "failure"
    }
  ];
    
  export default {
    logs,
  };
  