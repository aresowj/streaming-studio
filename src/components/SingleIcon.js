import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SingleIcon extends Component {
    onDragStart(e) {
        // e.dataTransfer.effectAllowed = "copy";
        console.log(this.state)
        e.dataTransfer.setData("application/json", JSON.stringify(this.props));
    }

    render() {
        return (
            <Button draggable="true" onDragStart={this.onDragStart.bind(this)}>
                {this.props.iconName}
            </Button>
        );
    }
}

export default SingleIcon;
