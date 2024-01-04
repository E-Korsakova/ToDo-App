import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';


class Task extends Component {

    state = {
        newDescription: ''
    }

    onEditInputChange = (e) => {
        this.setState(({newDescription: e.target.value}));
    }

    render() {
        const { description, created, onDeleted, 
                onTaskCompleted, onTaskEditing,
                onSubmitEditing, id,
                completed, editing } = this.props;

        let classNames = 'active'
        const Edit = () => {

            if (editing) {
                return (
                    <form onSubmit={() => onSubmitEditing(this.state.newDescription, id)}>
                        <input type="text" className="edit" autoFocus
                        placeholder={description}
                        value={this.state.newDescription}
                        onChange={this.onEditInputChange}
                    />
                    </form>
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

        const date = formatDistanceToNow(new Date(created), {includeSeconds: true, addSuffix: true})

        return (
            <li className={classNames}>
                <div className='view'>
                    <input className="toggle" type="checkbox"
                    onClick={onTaskCompleted}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{date}</span>
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

Task.propTypes = {
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onTaskCompleted: PropTypes.func.isRequired,
    onTaskEditing: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
}

Task.defaultProps = {
    completed: false,
    editing: false,
}

export default Task;