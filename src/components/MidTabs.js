import React, { Component } from 'react';
import { Col, Tab, Tabs } from 'react-bootstrap';
import SingleSourceIcon from './SingleSourceIcon';
import SingleTransformIcon from './SingleTransformIcon';
import SingleSinkIcon from './SingleSinkIcon';

class MidTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1,
      sources: [],
      transforms: [],
      sinks: [],
      code: "",
    };
  }

  designTabDrapOver(e) {
    e.preventDefault();
  }

  designTabDrop(e) {
    e.preventDefault();
    const newProps = JSON.parse(e.dataTransfer.getData("application/json"));

    if (newProps.iconType === "source") {
        this.setState({ sources: this.state.sources.concat(<SingleSourceIcon {...newProps} />) });
    } else if (newProps.iconType === "transform") {
        if (this.state.transforms.length === 0) {
            this.setState({ transforms: this.state.transforms.concat(<SingleTransformIcon {...newProps} />) });
        } else if (this.state.transforms.length === 1 && newProps.transformType != this.state.transforms[0].transformType) {
            this.setState({ transforms: this.state.transforms.concat(<SingleTransformIcon {...newProps} />) });
        }
    } else if (newProps.iconType === "sink") {
        this.setState({ sinks: this.state.sinks.concat(<SingleSinkIcon {...newProps} />) });
    }
  }

  render() {
    return (
      <Col md={6} id="mid-tabs-col">
        <Tabs defaultActiveKey={1} id="mid-tabs-component" aria-labelledby="middle tabs">
            <Tab eventKey={1} title="Design" id="tab-design" aria-labelledby="tab design"
                onDragOver={this.designTabDrapOver.bind(this)} onDrop={this.designTabDrop.bind(this)}>
                <g>
                    <Col md={12} className="tab-icons">
                        {this.state.sources}
                    </Col>
                    <Col md={12} className="tab-icons">
                        {this.state.transforms}
                    </Col>
                    <Col md={12} className="tab-icons">
                        {this.state.sinks}
                    </Col>
                </g>
            </Tab>
            <Tab eventKey={2} title="Code" id="tab-code" aria-labelledby="tab code">
                {this.state.code}
            </Tab>
            <Tab eventKey={3} title="Preview" id="tab-preview" aria-labelledby="tab preview">
                {this.state.preview}
            </Tab>
        </Tabs>
      </Col>
    );
  }
}

export default MidTabs;
