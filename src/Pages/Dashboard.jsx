import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Bar } from "ant-design-pro/lib/Charts";

import Tables from "../components/Tables";
import Charts from "../components/Charts";
import "./Dashboard.css";

const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 8,
  xl: 8
};


class Dashboard extends Component {
  render() {
    return (
      <div className="gutter-example">
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
          <Card
              title="Global Network Activity"
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
          <Col className="gutter-row" span={8} {...topColResponsiveProps}>
            <Card
              style={{
                background: "#fff",
                minHeight: 280
              }}
            >
              <div className="gutter-box">col-8</div>
            </Card>
          </Col>
          <Col className="gutter-row" span={8} {...topColResponsiveProps}>
            <Card
              style={{
                background: "#fff",
                minHeight: 280
              }}
            >
              <div className="gutter-box">col-8</div>
            </Card>
          </Col>
          <Col className="gutter-row" span={8} {...topColResponsiveProps}>
            <Card
              style={{
                background: "#fff",
                minHeight: 280
              }}
            >
              <div className="gutter-box">col-8</div>
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
              <Tables />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
