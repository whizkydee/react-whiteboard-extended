import React from 'react';

export default class Eraser extends React.Component {
  prepareData() {
    let d = [`M ${this.props.path[0].x} ${this.props.path[0].y}`];
    let collector = this.props.path.map(({ x, y }) => `L ${x} ${y}`);
    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    return <path d={d} fill="none" strokeWidth={20} stroke="#ffffff" />;
  }
}
