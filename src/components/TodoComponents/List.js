import React from 'react';

const List = props => {
    return(
        <div onClick={() => props.toggleItem(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default List;
