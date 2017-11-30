import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Label } from 'react-bootstrap';

class MyPanel extends Component {
  render() {
    return (
      <Panel header={this.props.panelTitle || "No Name"}>
        Test
      </Panel>
    );
  }
}

export default MyPanel;
