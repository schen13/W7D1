import React from 'react';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = merge({}, this.state);
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" name="title"></input>
        </label>
        <label>
          Body
          <input type="text" name="body"></input>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
