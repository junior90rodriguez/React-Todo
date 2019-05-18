import React from "react";

const Todo = function (props) {
    return(
        <div className="toDo">
            <div className="toDoList">
                <h3>props.toDoList.task</h3>
            </div>
        </div>
    );
};

export default Todo;