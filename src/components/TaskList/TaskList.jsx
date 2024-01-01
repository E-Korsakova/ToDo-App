import React from 'react';
import Task from '../Task/Task';
import './task-list.css';

export default function TaskList({todos, onDeleted}) {
    
    const elements = todos.map((task) => {
        return (
            <Task key={task.id} { ...task}
            onDeleted={() => onDeleted(task.id)} />
        );
    });
    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    );
}