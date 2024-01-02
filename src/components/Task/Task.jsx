import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';


export default class Task extends Component {

    state= {
        completed: false,
        editing: false
    }

    checkBoxClick = () => {
        this.setState(({completed}) => {
            return {
                completed: !completed
            }
        })
    }

    editBtnClick = () => {
        this.setState(({editing}) => {
            return {
                editing: !editing
            }
        })
    }

    render() {
        console.log(this.state);
        const { description, created, onDeleted} = this.props;
        const {completed, editing} = this.state;
        let classNames = 'active'
        let edit = '';

        
        if (completed) {
            classNames = "completed";
        }
    
        if (editing) {
            classNames = 'editing ';
            edit = <input type="text" className="edit" value="Editing task" />;         
        }



        //const timeOfCreate = ('0' + created.getDate()).slice(-2) + '.' + ('0' + (created.getMonth() + 1)).slice(-2) + '.' + created.getFullYear();

        //const time = formatDistanceToNow(new Date(created), {includeSeconds: true})
        //console.log(timeOfCreate);

        return (
            <li className={classNames}>
                <div className='view'>
                    <input className="toggle" type="checkbox"
                    onClick={this.checkBoxClick}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"
                    onClick={this.editBtnClick}></button>
                    <button className="icon icon-destroy"
                    onClick={onDeleted}></button>
                    {edit}
                </div>
            </li>
        );
    }
}