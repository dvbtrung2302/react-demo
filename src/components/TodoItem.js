import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends React.Component {
  render() {
    const { item } = this.props;
    let className = classNames(
      'TodoItem', 
      { 'completed': item.isCompleted }
    );
    return(
      <div className={className}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;