import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from './images/check.svg';
import checkCompletedImg from './images/check-completed.svg';

class TodoItem extends React.Component {
  render() {
    const { item, onClick } = this.props;
    let className = classNames(
      'TodoItem', 
      { 'completed': item.isCompleted }
    );
    let url = checkImg;

    if (item.isCompleted) {
      url = checkCompletedImg;
    }
    return(
      <div className={className} >
        <img onClick={onClick} src={url} width={32} height={32} />
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;