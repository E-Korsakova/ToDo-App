import React, {Component} from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
    onKeyDown = (evt, text) => {
        if (evt.keyCode === 13) {
            evt.preventDefault();
            console.log(`enter ${text}`);
        }
    }
    render() {
        console.log(this.props)
;        return (
            <form>
                <label>
                    Todo
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus 
                    onKeyDown={() => this.onKeyDown('hello')}/>
                    <button onClick={() => this.props.onTaskAdded('hello')}>Add</button>
                </label>
            </form>
        );
    }
}