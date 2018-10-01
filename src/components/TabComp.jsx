import React, { Component } from "react";
import { Tabs, Row, Col, Dropdown, Button, Icon, Menu } from "antd";

const TabPane = Tabs.TabPane;

const menu = (
  <Menu>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);

function callback(key) {
  console.log(key);
}

class TabComp extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback} size="large">
          <TabPane tab="All Activity" key="1">
            <Row gutter={24} style={{ margin: "24px 8px" }}>
              <Col className="gutter-row" span={8}>
                <Col span={4}>NAT Type</Col>
                <Col span={8}>
                  <Dropdown overlay={menu} placement="topLeft" >
                    <Button style={{ marginLeft: 8 }}>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu} placement="topCenter">
                    <Button style={{ marginLeft: 8 }}>
                      Any <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Col>
              <Col className="gutter-row" span={8}>
                NAT Type
              </Col>
              <Col className="gutter-row" span={8}>
                OS
              </Col>
            </Row>
            <Row gutter={24} style={{ margin: "24px 8px" }}>
              <Col className="gutter-row" span={8}>
                Protocol
              </Col>
              <Col className="gutter-row" span={8}>
                Country
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Country" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Operating System" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabComp;
