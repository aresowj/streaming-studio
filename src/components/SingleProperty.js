import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

class SingleProperty extends Component {
    constructor(props) {
        super(props);
        
        this.state = { "propertyValue": this.props.propertyValue };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({ "propertyValue": e.target.value })
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <span>{this.props.propertyName}</span>
                    <FormControl type="text" onChange={this.handleChange} placeholder="Enter value" value={this.state.propertyValue} />
                </Col>
            </Row>
        );
    }
}

export default SingleProperty;
