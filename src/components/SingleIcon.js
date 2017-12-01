import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Button, Image } from 'react-bootstrap';

class SingleIcon extends Component {
    onDragStart(e) {
        e.dataTransfer.setData("application/json", JSON.stringify(this.props));
    }

    onClick(e) {
        e.preventDefault();
        if (this.props.initialized) {
            // Do not do it for icons on the left panel which are not dropped to mid-tabs yet.
            this.props.setCurrentProperties(this.props.properties);

            // Start the connect logic
            const startIcon = this.props.getStartIcon();
            if (startIcon) {
                // Try to connect the previous icon
                var thisElement = ReactDom.findDOMNode(this);
                var startIcon = ReactDom.findDOMNode(startIcon);

                const originCoordinates = startIcon.getBoundingClientRect();
                const targetCoordinates = thisElement.getBoundingClientRect();

                const startPoint = { x: originCoordinates.left + originCoordinates.width / 2, y: originCoordinates.top + originCoordinates.height}
                const endPoint = { x: targetCoordinates.left + targetCoordinates.width / 2, y: targetCoordinates.top}

                this.convertCoordinate(this.props.graph, startPoint);
                this.convertCoordinate(this.props.graph, endPoint);

                this.props.graph.appendChild(this.createLineElement(startPoint.x, startPoint.y, endPoint.x, endPoint.y));

                this.props.setStartIcon(null);
            } else {
                // Set this icon as start icon
                this.props.setStartIcon(this.button);
            }
        }
    }

    convertCoordinate(svg, point) {
        var pt = svg.createSVGPoint();
        pt.x = point.x;
        pt.y = point.y;

        var svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

        point.x = svgP.x;
        point.y = svgP.y;
    }

    createLineElement(x1, y1, x2, y2) {
        var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');        
        newLine.setAttribute("x1", x1);
        newLine.setAttribute("x2", x2);
        newLine.setAttribute("y1", y1);
        newLine.setAttribute("y2", y2);
        newLine.setAttribute("stroke", "black");
        newLine.setAttribute("stroke-width", "2");
        newLine.setAttribute("marker-end", "url(#markerArrow)");

        return newLine;
    }

    render() {
        return (
            <Button className="custom-icon" draggable="true" onDragStart={this.onDragStart.bind(this)} onClick={this.onClick.bind(this)}
                    ref={(button) => { this.button = button; }}>
                <Image src={this.props.icon} width={30} height={30} />
                <br />
                {this.props.iconName}
            </Button>
        );
    }
}

export default SingleIcon;
