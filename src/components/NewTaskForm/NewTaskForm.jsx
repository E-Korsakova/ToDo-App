import React from 'react';
import './new-task-form.css';

export default function NewTaskForm() {
    const onKeyDown = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            console.log('enter');
        }
    }
    return (
        <form>
            <label>
                Todo
                <input className="new-todo" placeholder="What needs to be done?" autoFocus 
                onKeyDown={onKeyDown}/>
            </label>
        </form>
    );
}