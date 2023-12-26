import { React } from 'react';
import './new-task-form.css';

export default function NewTaskForm() {
    return (
        <form>
            <label>
                Todo
                <input className="new-todo" placeholder="What needs to be done?" autoFocus />
            </label>
        </form>
    );
}