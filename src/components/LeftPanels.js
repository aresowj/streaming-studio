import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyPanel from './MyPanel';
import SingleSourceIcon from './SingleSourceIcon';

class LeftPanels extends Component {
  render() {
    const iconProps = {"iconName": "Test"};
    const panel1 = {
      "panelTitle": "Source",
      "content": [<SingleSourceIcon {...iconProps} />, <SingleSourceIcon {...iconProps} />]
    };

    const panel2 = {
      "panelTitle": "Transform",
      "content": "Test",
    };

    const panel3 = {
      "panelTitle": "Sink",
      "content": "Test",
    };

    return (
      <Col md={3} id="left-panels-col">
        <MyPanel {...panel1} />
        <MyPanel {...panel2} />
        <MyPanel {...panel3} />
      </Col>
    );
  }
}

export default LeftPanels;
