import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'di choi', isCompleted: true },
      { title: 'di an' }, 
      { title: 'di uong'}
    ];
  }
  
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => 
            <TodoItem key={index} item={item} />
          )
        }
      </div>
    );
  }
}

export default App;
