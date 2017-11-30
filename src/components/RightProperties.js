import React, { Component } from 'react';
import { Row, Col, Panel, Label } from 'react-bootstrap';
import MyPanel from './MyPanel';

class RightProperties extends Component {
  render() {
    const properties = {
        "panelTitle": "Properties"
    };

    return (
      <Col md={2} id="right-properties-col">
        <MyPanel id="panel-properties" {...properties} />
      </Col>
    );
  }
}

export default RightProperties;

