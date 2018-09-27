import React, { Component } from "react";
import { Layout, Menu, Icon, DatePicker } from "antd";
import moment from "moment";

import Tables from "../Tables";
import Headers from "../Headers";

const { Header, Content } = Layout;
const { RangePicker } = DatePicker;

const dateFormat = "DD/MM/YYYY";

class Dashboard extends Component {
  render() {
    return (
      <Tables />
    );
  }
}

export default Dashboard;
