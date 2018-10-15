import React from 'react';

export default class Pen extends React.Component {
  prepareData() {
    let d = [`M ${this.props.path[0].x} ${this.props.path[0].y}`];

    let collector = this.props.path.map(point => {
      let xNext = point.x;
      let yNext = point.y;
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    return <path d={d} fill="none" strokeWidth={3} stroke={this.props.color} />;
  }
}
