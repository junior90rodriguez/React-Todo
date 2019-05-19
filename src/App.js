import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import { isIterable } from 'core-js';


const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    list
    };
  }

  toggleItem = itemId => {
    console.log("itemId: ", itemId);
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          list={this.state.list} 
            toggleItem={this.toggleItem}
          />
      </div>
      
    )
  }
}

export default App;
