import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class MyPanel extends Component {
  render() {
    return (
      <Panel header={this.props.panelTitle}>
        {this.props.content}
      </Panel>
    );
  }
}

export default MyPanel;
