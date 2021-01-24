import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const { tasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList tasksList={tasks} />}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}))(ToDo);
