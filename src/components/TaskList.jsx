import { React } from 'react';
import Task from './Task';
import './task-list.css';

export default function TaskList({todos}) {

    const elements = todos.map((task) => {

        const {id, className, ...taskProps } = task;

        if (task.className === "editing") {
            return (
            <li className={className} key={id}>
                <Task { ...taskProps} />
                <input type="text" className="edit" value="Editing task" />
            </li>
            )
            
        }

        return (
            <li className={task.className} key={task.id}>
                <Task { ...task} />
            </li>
        );
    })

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    );
}