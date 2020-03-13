import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'di choi', isCompleted: true },
        { title: 'di an', isCompleted: true }, 
        { title: 'di uong'}
      ]
    };
  }
  
  onItemClicked(item) {
    return (event) => { 
      const { todoItems } = {...this.state};
      const isCompleted = item.isCompleted;
      this.setState({
        todoItems: todoItems.map(value => {
          if (value === item) {
            return {...value, isCompleted: !isCompleted};
          } else {
            return {...value};
          }
        })
      })
    };

  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>
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
