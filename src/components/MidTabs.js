import React, { Component } from 'react';
import { Col, Tab, Tabs, FormControl } from 'react-bootstrap';
import SingleSourceIcon from './SingleSourceIcon';
import SingleTransformIcon from './SingleTransformIcon';
import SingleSinkIcon from './SingleSinkIcon';

class MidTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1,
            sources: [],
            joins: [],
            filters: [],
            sinks: [],
            code: "BI.Output\n(\n  RowSet = output,\n  Path = \"@@RootPath@@/output.ss\",\n  ClusteredColumns = \"Id\",\n  Mode = \"SkipStaging\"\n);",
            startIcon: null,
        };
        
        this.setCurrentProperties = this.setCurrentProperties.bind(this);
        this.setStartIcon = this.setStartIcon.bind(this);
        this.getStartIcon = this.getStartIcon.bind(this);
    }
    
    designTabDrapOver(e) {
        e.preventDefault();
    }
    
    designTabDrop(e) {
        e.preventDefault();
        var newProps = JSON.parse(e.dataTransfer.getData("application/json"));
        newProps.initialized = true;
        newProps.setCurrentProperties = this.setCurrentProperties;
        newProps.setStartIcon = this.setStartIcon;
        newProps.getStartIcon = this.getStartIcon;
        newProps.graph = this.refs.graph;
        
        if (newProps.iconType === "source") {
            this.setState({ "sources": this.state.sources.concat(newProps) });
        } else if (newProps.iconType === "transform" && newProps.transformType === "join") {
            this.setState({ joins: this.state.joins.concat(newProps) });
        } else if (newProps.iconType === "transform" && newProps.transformType === "filter") {
            this.setState({ filters: this.state.filters.concat(newProps) });
        } else if (newProps.iconType === "sink") {
            this.setState({ sinks: this.state.sinks.concat(newProps) });
        }
    }
    
    setCurrentProperties(properties) {
        this.props.setCurrentProperties(properties);
    }

    setStartIcon(icon) {
        this.setState({ "startIcon": icon });
    }

    getStartIcon() {
        return this.state.startIcon;
    }
    
    render() {
        const sourceComps = [];
        const joinComps = [];
        const filterComps = [];
        const sinkComps = [];

        for (var index=0; index < this.state.sources.length; index++) { sourceComps.push(<SingleSourceIcon {...this.state.sources[index]} />) };
        for (index=0; index < this.state.joins.length; index++) { joinComps.push(<SingleTransformIcon {...this.state.joins[index]} />) };
        for (index=0; index < this.state.filters.length; index++) { filterComps.push(<SingleTransformIcon {...this.state.filters[index]} />) };
        for (index=0; index < this.state.sinks.length; index++) { sinkComps.push(<SingleSinkIcon {...this.state.sinks[index]} />) };
        
        return (
            <Col md={6} id="mid-tabs-col">
                <Tabs defaultActiveKey={1} id="mid-tabs-component" aria-labelledby="middle tabs">
                    <Tab eventKey={1} title="Design" id="tab-design" aria-labelledby="tab design"
                        onDragOver={this.designTabDrapOver.bind(this)} onDrop={this.designTabDrop.bind(this)}>
                        <header z-index="1">Drag & drop the icons on the left to start!</header>
                        <Col md={12}>
                            <div id="svg-container" z-index="-1">
                                <svg id="graph-svg" ref="graph" width="100%" height="100%">
                                    <defs>
                                        <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="2" refY="6" orient="auto" markerUnits="strokeWidth">
                                            <path d="M2,2 L2,11 L10,6 L2,2" style={{fill: "#000000"}} />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>
                            <Col md={12} className="tab-icons" id="sources-icons-tab-col">
                                {sourceComps}
                            </Col>
                            <Col md={12} className="tab-icons" id="joins-icons-tab-col">
                                {joinComps}
                            </Col>
                            <Col md={12} className="tab-icons" id="filters-icons-tab-col">
                                {filterComps}
                            </Col>
                            <Col md={12} className="tab-icons" id="sinks-icons-tab-col">
                                {sinkComps}
                            </Col>
                        </Col>
                    </Tab>
                    <Tab eventKey={2} title="Code" id="tab-code" aria-labelledby="tab code">
                        <FormControl componentClass="textarea" rows={20} cols={20}>
                            {this.state.code}
                        </FormControl>
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
