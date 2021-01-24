import React, { Component } from 'react';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    activeFilter: 'all',
    taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  render() {
    const { activeFilter, taskText } = this.state;
    const tasksList = [];
    const isTasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList tasksList={tasksList} />}
        {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default ToDo;
