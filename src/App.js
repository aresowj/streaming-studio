import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import LeftPanels from './components/LeftPanels';
import MidTabs from './components/MidTabs';
import RightProperties from './components/RightProperties';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "currentProperties": [],
    }

    this.setCurrentProperties = this.setCurrentProperties.bind(this);
    this.setCurrentProperties = this.getCurrentProperties.bind(this);
  }

  setCurrentProperties(properties) {
    this.setState({"currentProperties": properties});
  }
  
  getCurrentProperties() { return this.state.currentProperties; }

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
            <LeftPanels {...this.props} />
            <MidTabs {...this.props} />
            <RightProperties {...this.props} />
          </Row>
        </Row>
      </Grid>
    );
  }
}

export default App;
