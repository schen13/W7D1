import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
const TodoList = ({todos, receiveTodo}) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem todo={todo} />
        ))}
      </ul>
      <TodoForm receiveTodo={ receiveTodo }/>
    </div>
  );
};


export default TodoList;
