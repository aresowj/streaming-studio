import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SingleIcon extends Component {
    constructor(props) {
      super(props);
      this.setCurrentProperties = props.setCurrentProperties;
      this.getCurrentProperties = props.getCurrentProperties;
    }
    
    onDragStart(e) {
        e.dataTransfer.setData("application/json", JSON.stringify(this.props));
    }

    onMove(e) {
    }

    onClick() {
        this.setCurrentProperties(this.props.properties)
    }

    render() {
        return (
            <Button draggable="true" onDragStart={this.onDragStart.bind(this)} onMove={this.onMove} onClick={this.onClick.bind(this)}
                className="custom-icon">
                {this.props.iconName}
            </Button>
        );
    }
}

export default SingleIcon;
