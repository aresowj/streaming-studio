import React, { Component } from 'react';
import { Col, Tab, Tabs } from 'react-bootstrap';

class MidTabs extends Component {
  designTabDrapOver(e) {
    e.preventDefault();
    // e.dataTransfer.dropEffect = "copy";
  }

  designTabDrop(e) {
    e.preventDefault();
    console.log('dropped');
  }

  render() {
    return (
      <Col md={6} id="mid-tabs-col">
        <Tabs defaultActiveKey={1} id="mid-tabs-component">
            <Tab eventKey={1} title="Design" id="tab-design"
                 onDragOver={this.designTabDrapOver} onDrop={this.designTabDrop}>Tab 1 content</Tab>
            <Tab eventKey={2} title="Code" id="tab-code">Tab 2 content</Tab>
            <Tab eventKey={3} title="Preview" id="tab-preview">Tab 3 content</Tab>
        </Tabs>
      </Col>
    );
  }
}

export default MidTabs;
