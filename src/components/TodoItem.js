import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends React.Component {
  render() {
    const { item, onClick, dataId } = this.props;
    let className = classNames(
      'TodoItem', 
      { 'completed': item.isCompleted }
    );
    return(
      <div onClick={onClick} className={className} data-id={dataId}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;