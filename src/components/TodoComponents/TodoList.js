// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = function(props) {
    return(
        <div className="do-list">
            {props.TodoList.map(item => {
                <Item key={item.id} name={item.name} />;
            })}
        </div>
    );
}; 

export default TodoList;