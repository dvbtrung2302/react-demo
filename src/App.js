import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      todoItems: [
        { title: 'di choi', isCompleted: true },
        { title: 'di an', isCompleted: true }, 
        { title: 'di uong'}
      ]
    };
    this.onItemClicked = this.onItemClicked.bind(this);
  }
  
  onItemClicked(event) {
    event.persist();
    const id = parseInt(event.currentTarget.dataset.id);
    const todoItems = [...this.state.todoItems];
    const itemClicked = todoItems.find((item, index) => index === id);
    itemClicked.isCompleted = !itemClicked.isCompleted;
    todoItems[id] = itemClicked;
    this.setState({todoItems});
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem key={index} item={item} onClick={this.onItemClicked} dataId={index}/>
          )
        }
        {
          todoItems.length === 0 && 'Nothing here.'
        }
      </div>
    );
  }
}

export default App;
