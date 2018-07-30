import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => {
  return (
    <ul>
      {todos.map((todo) => TodoListItem(todo))}
    </ul>
    // <TodoForm receiveTodo={ receiveTodo }/>
  );
};

export default TodoList;
