import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyPanel from './MyPanel';
import SingleSourceIcon from './SingleSourceIcon';
import SingleTransformIcon from './SingleTransformIcon';
import SingleSinkIcon from './SingleSinkIcon';

class LeftPanels extends Component {
  constructor(props) {
    super(props);
    this.setCurrentProperties = props.setCurrentProperties;
    this.getCurrentProperties = props.getCurrentProperties;
  }

  render() {
    const sourceIcons = [{
      "iconType": "source",
      "iconName": "Source 1",
      "value": "table",
      "icon": "",
      "properties": [],
      setCurrentProperties: this.setCurrentProperties,
      getCurrentProperties: this.getCurrentProperties,
    }, {
      "iconType": "source",
      "iconName": "Source 2",
      "value": "table",
      "icon": "",
      "properties": [],
      setCurrentProperties: this.setCurrentProperties,
      getCurrentProperties: this.getCurrentProperties,
    }];

    const panel1 = {
      "panelTitle": "Source",
      "content": [<SingleSourceIcon key={1} {...sourceIcons[0]} />, <SingleSourceIcon key={2} {...sourceIcons[1]} />],
    };
    
    const transformIcons = [{
      "iconType": "transform",
      "iconName": "Transform 1",
      "transformType": "join",
      "icon": "",
      "properties": [],
      setCurrentProperties: this.setCurrentProperties,
      getCurrentProperties: this.getCurrentProperties,
    }, {
      "iconType": "transform",
      "iconName": "Transform 2",
      "transformType": "filter",
      "icon": "",
      "properties": ["Filter"],
      setCurrentProperties: this.setCurrentProperties,
      getCurrentProperties: this.getCurrentProperties,
    }];

    const panel2 = {
      "panelTitle": "Transform",
      "content": [<SingleTransformIcon key={1} {...transformIcons[0]} />, <SingleTransformIcon key={2} {...transformIcons[1]} />],
    };

    const sinkIcons = [{
      "iconType": "sink",
      "iconName": "Sink 1",
      "sinkTarget": "PowerBI",
      "icon": "",
      "properties": ["Target"],
      setCurrentProperties: this.setCurrentProperties,
      getCurrentProperties: this.getCurrentProperties,
    }, {
      "iconType": "sink",
      "iconName": "Sink 2",
      "sinkTarget": "Alert/Notification",
      "icon": "",
      "properties": ["Target"],
      setCurrentProperties: this.setCurrentProperties,
      getCurrentProperties: this.getCurrentProperties,
    }];

    const panel3 = {
      "panelTitle": "Sink",
      "content": [<SingleSinkIcon key={1} {...sinkIcons[0]} />, <SingleSinkIcon key={2} {...sinkIcons[1]} />],
    };

    return (
      <Col md={3} id="left-panels-col">
        <MyPanel key={1} id="source-panel" {...panel1} />
        <MyPanel key={2} id="trasnform-panel" {...panel2} />
        <MyPanel key={3} id="sink-panel" {...panel3} />
      </Col>
    );
  }
}

export default LeftPanels;
