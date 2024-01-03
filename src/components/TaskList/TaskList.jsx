import React from 'react';
import Task from '../Task/Task';
import './task-list.css';

export default function TaskList({todos, onDeleted, onTaskCompleted, onTaskEditing}) {
    const elements = todos.map((task) => {
        return (
            <Task key={task.id} { ...task}
            onDeleted={() => onDeleted(task.id)}
            onTaskCompleted={() => onTaskCompleted(task.id)}
            onTaskEditing={() => onTaskEditing(task.id)}/>
        );
    });

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    );
}