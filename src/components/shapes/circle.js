import React from 'react';

export default class Circle extends React.Component {
  prepareData() {
    let circle = {
      cx: this.props.path[0].x,
      cy: this.props.path[0].y,
      r: Math.abs(
        this.props.path[this.props.path.length - 1].x - this.props.path[0].x
      )
    };
    return circle;
  }

  render() {
    let circle = this.prepareData();
    return (
      <circle
        fill="none"
        r={circle.r}
        cx={circle.cx}
        cy={circle.cy}
        strokeWidth={3}
        stroke={this.props.color}
      />
    );
  }
}
