import React from 'react';
import Todo from './components/TodoComponents/Todo';

const toDoList = [
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
  constructor() {
    super();
    this.state = {
      toDo: toDoList
    };
  }

  changeHandler = event => {
    console.log(event);
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
        <div className="todo-list">
          {this.state.toDo.map(list => (
            <Todo list={list} />
          ))}
        </div>

        <form>
          <input
            type="text"
            value=""
            placeholder="name"
            name="name"
            onChange={this.changeHandler}
            />
        </form>
      </div>
     
      
    );
  }
}

export default App;
