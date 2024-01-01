import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';


export default class Task extends Component {

    state = {
        completed: false,
        editing: false
    }

    onCheckboxClick = () => {
        this.setState(({completed}) => {
            return {
                completed: !completed
            }
        })
    }

    onEditBtnClick = () => {
        this.setState(({editing}) => {
            return {
                editing: !editing
            }
        })
    }
    render() {
        //console.log(this.props);
        const {completed, editing} = this.state;
        const { description, created, onDeleted } = this.props;
        let classNames = '';
        let edit = '';
    
        if (editing) {
            classNames += 'editing ';
            edit = <input type="text" className="edit" value="Editing task" />;         
        }

        if (completed) {
            classNames += 'completed ';
        }

        return (
            <li className={classNames}>
                <div className='view'>
                    <input className="toggle" type="checkbox"
                    onClick={this.onCheckboxClick}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"
                    onClick={this.onEditBtnClick}></button>
                    <button className="icon icon-destroy"
                    onClick={onDeleted}></button>
                    {edit}
                </div>
            </li>
        );
    }
}