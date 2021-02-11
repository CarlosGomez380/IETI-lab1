import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    const listTodo = props.todoList;
    var listItems = "";
    return (
        
        listItems =listTodo.map((todo) =>
            <Todo key={todo.text} text={todo.text} priority={todo.priority} dueDate={todo.dueDate.toString()}/>
        )

    );
}

export default TodoList;