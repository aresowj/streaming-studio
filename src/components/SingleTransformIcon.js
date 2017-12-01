import React, { Component } from 'react';
import SingleIcon from './SingleIcon';

class SingleTrasnformIcon extends Component {
  constructor(props) {
    super(props);
    this.setCurrentProperties = props.setCurrentProperties;
    this.getCurrentProperties = props.getCurrentProperties;
  }
  
  render() {
    return (
      <SingleIcon {...this.props} />
    );
  }
}

export default SingleTrasnformIcon;
