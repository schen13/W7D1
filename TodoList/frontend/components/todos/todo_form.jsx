import React from 'react';
import merge from 'lodash/merge';
import { uniqueId } from '../../util/todo_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = merge({}, this.state);
    todo.id = uniqueId();
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
      done: false
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input value={this.state.title} onChange={this.updateTitle}></input>
        </label>
        <label>
          Body
          <input value={this.state.body} onChange={this.updateBody}></input>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
