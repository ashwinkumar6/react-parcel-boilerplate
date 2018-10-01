import React, { Component } from "react";
import { Table, Radio, Form } from "antd";

import "./Tables.css";
//import data from '../assets/data';
import columns from '../assets/tableData/tableColumn';

const FormItem = Form.Item;
const dataSource = [];

function formatData(rawData){
  rawData.forEach(log => {
    dataSource.push({
        key: Math.floor(Math.random()*10000),
        num: 7304,
        direct: log.is_direct_successful === true ? "Yes" : "No",
        tcp_hp: log.tcp_hole_punch_result === "success" ? "Yes" : "Fail",
        utp_hp: !(log.utp_hole_punch_result.Succeeded) ? "Fail" : `${log.utp_hole_punch_result.Succeeded.time_spent.secs}:${log.utp_hole_punch_result.Succeeded.time_spent.nanos}`,
        nat_type: [log.peer_requester.nat_type, log.peer_responder.nat_type],
        os: [log.peer_requester.os, log.peer_responder.os],
        country: [log.peer_requester.geo_info.country_name, log.peer_responder.geo_info.country_name]
    });
});
}

class Tables extends Component {
  render() {
    console.log("props",this.props);
    formatData(this.props.data);
    console.log("Non-format N formated",this.props.data);
    console.log("datasource",dataSource);
return (
      <div>

        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
      </div>
    );
  }
}

export default Tables;
