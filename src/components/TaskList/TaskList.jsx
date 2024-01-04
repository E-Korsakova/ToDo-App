import React from 'react';
import Task from '../Task/Task';
import './task-list.css';

export default function TaskList(props) {
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