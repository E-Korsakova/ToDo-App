import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';


export default class Task extends Component {

    render() {
        const { description, created, onDeleted, 
                onTaskCompleted, onTaskEditing,
                completed, editing } = this.props;

        let classNames = 'active'
        const Edit = () => {
            if (editing) {
                return (
                    <input type="text" className="edit" defaultValue="Editing task" />
                );
            }
            return;
        };
        
        if (completed) {
            classNames = "completed";
        }
    
        if (editing) {
            classNames = 'editing ';       
        }

        //const timeOfCreate = ('0' + created.getDate()).slice(-2) + '.' + ('0' + (created.getMonth() + 1)).slice(-2) + '.' + created.getFullYear();

        //const time = formatDistanceToNow(new Date(created), {includeSeconds: true})
        //console.log(timeOfCreate);

        return (
            <li className={classNames}>
                <div className='view'>
                    <input className="toggle" type="checkbox"
                    onClick={onTaskCompleted}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"
                    onClick={onTaskEditing}></button>
                    <button className="icon icon-destroy"
                    onClick={onDeleted}></button>
                </div>
                <Edit />
            </li>
        );
    }
}