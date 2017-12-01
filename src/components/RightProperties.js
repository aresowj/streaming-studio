import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyPanel from './MyPanel';
import SingleProperty from './SingleProperty';

class RightProperties extends Component {
  constructor(props) {
    super(props);
    this.setCurrentProperties = props.setCurrentProperties;
    this.getCurrentProperties = props.getCurrentProperties;
  }

  render() {
    const properties = [
      <SingleProperty key={1} />, <SingleProperty key={2} />, <SingleProperty key={3} />,
    ]
    const propertiesComp = {
        "panelTitle": "Properties",
        "content": this.getCurrentProperties(),
    };

    return (
      <Col md={3} id="right-properties-col">
        <MyPanel id="properties-panel" {...propertiesComp} />
      </Col>
    );
  }
}

export default RightProperties;
