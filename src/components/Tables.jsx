import React, { Component } from "react";
import { Menu, Table, Radio, Form, Badge, Dropdown, Icon } from "antd";

import "./Tables.css";

const FormItem = Form.Item;

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return <div>SRINI</div>;
};

const dataSource = [
  {
    key: "1",
    num: 7304,
    direct: "Yes",
    tcp_hp: "Fail",
    utp_hp: "0:06",
    nat_type: ["EIM", "EDM"],
    os: ["MacOS 10.3", "Windows 3.1"],
    country: ["Scotland", "India"]
  },
  {
    key: "2",
    num: 7303,
    direct: "No",
    tcp_hp: "Fail",
    utp_hp: "Fail",
    nat_type: ["EIM", "EIM"],
    os: ["Windows XP", "Windows XP"],
    country: ["Spain", "China"]
  },
  {
    key: "3",
    num: 7302,
    direct: "Yes",
    tcp_hp: "Fail",
    utp_hp: "1:14",
    nat_type: ["EDM", "EDM"],
    os: ["MacOS 10.2", "Windows 3.1"],
    country: ["Chad", "Ireland"]
  },
  {
    key: "4",
    num: 7301,
    direct: "No",
    tcp_hp: "0:57",
    utp_hp: "0:02",
    nat_type: ["EIM", "EDM"],
    os: ["Linux", "Windows"],
    country: ["Scotland", "China"]
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
    title: "",
    dataIndex: "req_res",
    key: "req_res",
    render: (text) => {
      return (<div style={{textAlign: "right"}}>
          <div>{`Requester`}</div>
          <div>{`Responder`}</div>
        </div>);
    }
  },
  {
    title: "NAT Type",
    dataIndex: "nat_type",
    key: "nat_type",
    render: (text) => {
      return (<div>
          <div>{text[0]}</div>
          <div>{text[1]}</div>
        </div>);
    }
  },
  {
    title: "Operating System",
    dataIndex: "os",
    key: "os",
    filters: [
      { text: "MacOS 10.3", value: "MacOS 10.3" },
      { text: "Windows 10", value: "Windows 10" },
      { text: "Linux RedHat 1.2", value: "Linux RedHat 1.2" }
    ],
    render: (text) => {
      return (<div>
          <div>{text[0]}</div>
          <div>{text[1]}</div>
        </div>);
    }
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    sorter: (a, b) => a.country.length - b.country.length,
    render: (text) => {
      return (<div>
          <div>{text[0]}</div>
          <div>{text[1]}</div>
        </div>);
    }
  }
];

class Tables extends Component {
  render() {
    return (
      <div>
        <span className="btn-grp">
          <FormItem>
            <Radio.Group>
              <Radio.Button value="successful"> Successful </Radio.Button>
              <Radio.Button value="failed"> Failed </Radio.Button>
              <Radio.Button value="all"> All </Radio.Button>
            </Radio.Group>
          </FormItem>
        </span>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  }
}

export default Tables;
