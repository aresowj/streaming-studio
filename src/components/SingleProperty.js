import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

class SingleProperty extends Component {
  constructor(props) {
    super(props);
    this.setCurrentProperties = props.setCurrentProperties;
    this.getCurrentProperties = props.getCurrentProperties;
  }
  
  render() {
    return (
      <Row>
        <Col md={12}>
            <span>{this.props.propertyName || "No Name"}</span>
            <FormControl type="text" placeholder="Enter value"></FormControl>
        </Col>
      </Row>
    );
  }
}

export default SingleProperty;
