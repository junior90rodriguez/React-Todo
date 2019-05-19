// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = function(props) {
    return(
        <div className="do-list">
            {props.TodoList.map(item => {
                <Item key={item.id} item={item} />;
            })}
        </div>
    );
}; 

export default TodoList;