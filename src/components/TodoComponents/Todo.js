import React from "react";

const Todo = function (props) {
    return(
        <div className="toDo">
            <div className="toDoList">
                <h3>{props.toDoList.task}</h3>
                <p>{props.toDoList.id}</p>
                <p>{props.toDoList.complete}</p>
            </div>
        </div>
    );
};

export default Todo;