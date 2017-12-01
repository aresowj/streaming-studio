import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyPanel from './MyPanel';
import SingleSourceIcon from './SingleSourceIcon';
import SingleTransformIcon from './SingleTransformIcon';
import SingleSinkIcon from './SingleSinkIcon';
import images from '../constants';

class LeftPanels extends Component {
    render() {
        const sourceIcons = [{
            "iconType": "source",
            "iconName": "Event Hub",
            "value": "table",
            "icon": images.eventHub,
            "properties": {
                "Source Name": "Event Hub 1"
            },
        }, {
            "iconType": "source",
            "iconName": "Event Hub",
            "value": "table",
            "icon": images.eventHub,
            "properties": {
                "Source Name": "Event Hub 2"
            },
        }];

        const panel1 = {
            "panelTitle": "Source",
            "content": [
                <SingleSourceIcon key={1} {...sourceIcons[0]} setCurrentProperties={this.props.setCurrentProperties} />,
                <SingleSourceIcon key={2} {...sourceIcons[1]} setCurrentProperties={this.props.setCurrentProperties} />
            ],
        };

        const transformIcons = [{
            "iconType": "transform",
            "iconName": "Join",
            "transformType": "join",
            "icon": images.join,
            "properties": {
                "Join Method": "Left Join"
            },
        }, {
            "iconType": "transform",
            "iconName": "Filter",
            "transformType": "filter",
            "icon": images.filter,
            "properties": {
                "Filter": "Event.MovingSum > 50"
            },
        }];

        const panel2 = {
            "panelTitle": "Transform",
            "content": [
                <SingleTransformIcon key={1} {...transformIcons[0]} />,
                <SingleTransformIcon key={2} {...transformIcons[1]} />
            ],
        };

        const sinkIcons = [{
            "iconType": "sink",
            "iconName": "PowerBI",
            "sinkTarget": "PowerBI",
            "icon": images.powerBI,
            "properties": {
                "Target": "Support PowerBI"
            },
        }, {
            "iconType": "sink",
            "iconName": "Alert/Notification",
            "sinkTarget": "Alert/Notification",
            "icon": images.alert,
            "properties": {
                "Target": "SKPI Managers"
            },
        }];

        const panel3 = {
            "panelTitle": "Sink",
            "content": [
                <SingleSinkIcon key={1} {...sinkIcons[0]} />,
                <SingleSinkIcon key={2} {...sinkIcons[1]} />
            ],
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
