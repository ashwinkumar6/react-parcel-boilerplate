import React, { Component } from "react";
import {
  Card,
  Table,
  Radio,
  Form
} from "antd";

import './Tables.css';

const FormItem = Form.Item;
const dataSource = [
  {
    key: "1",
    num: 7300,
    direct: "Yes",
    tcp_hp: "Fail",
    utp_hp: "Fail",
    nat_type: "abc",
    os: "MacOS 10.3",
    country: "Scotland"
  },
  {
    key: "2",
    num: 7300,
    direct: "Yes",
    tcp_hp: "Fail",
    utp_hp: "Fail",
    nat_type: "abc",
    os: "MacOS 10.3",
    country: "India"
  },
  {
    key: "3",
    num: 7300,
    direct: "Yes",
    tcp_hp: "Fail",
    utp_hp: "Fail",
    nat_type: "abc",
    os: "MacOS 10.3",
    country: "Argentina"
  }
];

const columns = [
  {
    title: "#",
    dataIndex: "num",
    key: "num",
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "Direct",
    dataIndex: "direct",
    key: "direct"
  },
  {
    title: "TCP HP",
    dataIndex: "tcp_hp",
    key: "tcp_hp"
  },
  {
    title: "uTP HP",
    dataIndex: "utp_hp",
    key: "utp_hp"
  },
  {
    title: "NAT Type",
    dataIndex: "nat_type",
    key: "nat_type"
  },
  {
    title: "Operating System",
    dataIndex: "os",
    key: "os",
    filters: [
      { text: "MacOS 10.3", value: "MacOS 10.3" },
      { text: "Windows 10", value: "Windows 10" },
      { text: "Linux RedHat 1.2", value: "Linux RedHat 1.2" }
    ]
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    sorter: (a, b) => a.country.length - b.country.length
  }
];

class Tables extends Component {

  render() {
    return (
      <Card title="Recent Activity">
        <span className="btn-grp">
          <FormItem>
            <Radio.Group>
              <Radio.Button value="successful"> Successful </Radio.Button>
              <Radio.Button value="failed"> Failed </Radio.Button>
              <Radio.Button value="all"> All </Radio.Button>
            </Radio.Group>
          </FormItem>
        </span>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    );
  }
}

export default Tables;
