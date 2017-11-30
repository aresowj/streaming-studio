import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import LeftPanels from './components/LeftPanels';
import MidTabs from './components/MidTabs';
import RightProperties from './components/RightProperties';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="App">
          <Row className="header">
            <Col md={12}>
            <PageHeader>Streaming Studio</PageHeader>
            </Col>
          </Row>
          <Row>
            <LeftPanels />
            <MidTabs />
            <RightProperties />
          </Row>
        </Row>
      </Grid>
    );
  }
}

export default App;
