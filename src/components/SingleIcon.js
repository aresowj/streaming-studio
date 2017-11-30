import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SingleIcon extends Component {
    onDragStart(e) {
        // console.log('drag start')
        e.dataTransfer.effectAllowed = "copy";        
    }

    render() {
        return (
            <Button draggable="true">
                {this.props.iconName}
            </Button>
        );
    }
}

export default SingleIcon;
