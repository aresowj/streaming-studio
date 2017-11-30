import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyPanel from './MyPanel';
import SingleProperty from './SingleProperty';

class RightProperties extends Component {
  render() {
    const properties = [
      <SingleProperty />, <SingleProperty />, <SingleProperty />,
    ]
    const propertiesComp = {
        "panelTitle": "Properties",
        "content": properties,
    };

    return (
      <Col md={3} id="right-properties-col">
        <MyPanel id="properties-panel" {...propertiesComp} />
      </Col>
    );
  }
}

export default RightProperties;
