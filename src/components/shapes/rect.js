import React from 'react';

export default class Rect extends React.Component {
  prepareData() {
    let rect = {
      x: this.props.path[0].x,
      y: this.props.path[0].y,
      width:
        this.props.path[this.props.path.length - 1].x - this.props.path[0].x,
      height:
        this.props.path[this.props.path.length - 1].y - this.props.path[0].y
    };
    return rect;
  }

  render() {
    let rect = this.prepareData();
    return (
      <rect
        x={rect.x}
        y={rect.y}
        fill="none"
        strokeWidth={1}
        width={rect.width}
        height={rect.height}
        stroke={this.props.color}
      />
    );
  }
}
