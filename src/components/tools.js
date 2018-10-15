import React from 'react';
import EventBus from '../eventBus';
import ToolStore, { POINTER, PEN, LINE, CIRCLE, RECT, ERASER } from '../toolStore';
import ColorPicker from './colorPicker';

export default class Tools extends React.Component {
  constructor() {
    super();
    this.state = {
      tools: [
        { id: POINTER, label: 'fa-mouse-pointer', type: 'cursor' },
        { id: LINE, label: 'fa-minus', type: 'line' },
        { id: RECT, label: 'fa-square-o', type: 'rect' },
        { id: CIRCLE, label: 'fa-circle-thin', type: 'circle' },
        { id: PEN, label: 'fa-pencil', type: 'pen', selected: true },
        { id: ERASER, label: 'fa-eraser', type: 'eraser' }
      ]
    };
    ToolStore.subscribe(() => {
      const tools = this.state.tools.map(tool => ({
        ...tool,
        selected: ToolStore.tool === tool.id
      }));
      this.setState({ tools });
    });
  }
  handleClick(index) {
    return function() {
      EventBus.emit(EventBus.TOOL_CHANGE, this.state.tools[index].id);
    };
  }

  render() {
    const tools = this.state.tools.map((tool, i) => (
      <div
        key={i}
        onClick={this.handleClick(i).bind(this)}
        className={tool.selected ? 'selected' : ''}
      >
        <i className={tool.label + ' fa'} />
      </div>
    ));
    return (
      <div id="tools">
        {tools}
        <ColorPicker />
      </div>
    );
  }
}
