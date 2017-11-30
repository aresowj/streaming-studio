import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Label } from 'react-bootstrap';
import MyPanel from './MyPanel';

class LeftPanels extends Component {
  render() {
    const panel1 = {
      "panelTitle": "Source"
    };

    const panel2 = {
      "panelTitle": "Transform"
    };

    const panel3 = {
      "panelTitle": "Sink"
    };

    return (
      <Col md={2} id="left-panels-col">
        <MyPanel {...panel1} />
        <MyPanel {...panel2} />
        <MyPanel {...panel3} />
      </Col>
    );
  }
}

export default LeftPanels;
