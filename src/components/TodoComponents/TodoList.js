// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import List from './List'

const TodoList = props => {
    return(
        <div>
            {props.list.map(item => (
                <List key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </div>
    );
}; 

export default TodoList;