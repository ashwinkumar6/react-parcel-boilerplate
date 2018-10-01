import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import Tables from "../components/Tables";
import Charts from "../components/Charts";
import TabComp from "../components/TabComp";
import "./Dashboard.css";

const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 8,
  xl: 8
};

class ConnectionAttempts extends Component {
  render() {
    console.log("props passes to connection attempts",this.props)
    return (
      <div className="gutter-example">
      <h1 style={{padding: "10px 0px 0px 30px"}}>Connection Attempts</h1>
      <span>
      Connection result: 

      </span>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 100
              }}
            >
            <TabComp />
          </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}
            >
              <Charts />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                minHeight: 280
              }}
            >
              <Tables data={this.props.data} filter={this.props.filter}/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConnectionAttempts;
