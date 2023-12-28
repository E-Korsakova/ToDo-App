import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';


export default class Task extends Component {
    onCheckboxClick = () => {
        console.log(`done: ${this.props.description}`);
    }
    render() {
        const { description, created } = this.props;
        return (
            <div className='view'>
                <input className="toggle" type="checkbox"
                onClick={this.onCheckboxClick}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        );
    }
}