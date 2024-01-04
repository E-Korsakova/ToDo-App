import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './task-list.css';

function TaskList(props) {
    const {todos, onDeleted, onTaskCompleted, onTaskEditing, onSubmitEditing} = props;
    const elements = todos.map((task) => {
        return (
            <Task key={task.id} {...task}
            onDeleted={() => onDeleted(task.id)}
            onTaskCompleted={() => onTaskCompleted(task.id)}
            onTaskEditing={() => onTaskEditing(task.id)}
            onSubmitEditing={onSubmitEditing}/>
        );
    });

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    );
}

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onDeleted: PropTypes.func.isRequired,
    onTaskCompleted: PropTypes.func.isRequired,
    onTaskEditing: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
  };
  
  TaskList.defaultProps = {
    todos: [],
  };

export default TaskList;