import React from 'react';
import smoothPath from '../../smooth-path';

export default class Pen extends React.Component {
  prepareData() {
    const collector = smoothPath(this.props.path.map(({ x, y }) => [x, y]));
    return collector;
  }

  render() {
    let d = this.prepareData();
    return <path d={d} fill="none" strokeWidth={3} stroke={this.props.color} />;
  }
}
