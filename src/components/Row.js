import React, { Component } from 'react';
import style from '../stylesheets/Row.scss';

class Row extends Component {
  render() {
    return (
      <div className={"row-container"}>
        {this.props.pics}
      </div>
    );
  }
}

export default Row;