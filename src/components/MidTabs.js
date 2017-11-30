import React, { Component } from 'react';
import { Grid, Row, Col, Tab, Tabs, Label } from 'react-bootstrap';

class MidTabs extends Component {
  render() {
    return (
      <Col md={8} id="mid-tabs-col">
        <Tabs defaultActiveKey={1} id="mid-tabs-component">
            <Tab eventKey={1} title="Design" id="tab-design">Tab 1 content</Tab>
            <Tab eventKey={2} title="Code" id="tab-code" disabled>Tab 2 content</Tab>
            <Tab eventKey={3} title="Preview" id="tab-preview" disabled>Tab 3 content</Tab>
        </Tabs>
      </Col>
    );
  }
}

export default MidTabs;
