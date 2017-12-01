import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyPanel from './MyPanel';
import SingleProperty from './SingleProperty';

class RightProperties extends Component {
    render() {
        var currentKey = 1;
        var propertyComps = [];

        for (var propertyName in this.props.properties) {
            propertyComps.push(<SingleProperty key={currentKey}
                                    propertyName={propertyName}
                                    propertyValue={this.props.properties[propertyName]}
                                />);
            currentKey += 1;
        }

        const propertiesPanelProps = {
            "panelTitle": "Properties",
            "content": propertyComps,
        };
        
        return (
            <Col md={3} id="right-properties-col">
                <MyPanel id="properties-panel" {...propertiesPanelProps} />
            </Col>
        );
    }
}

export default RightProperties;
