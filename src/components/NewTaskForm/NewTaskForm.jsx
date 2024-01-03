import React, {Component} from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {

    state = {
        description: ''
    }

    onInputValueChange = (e) => {
        this.setState(({description: e.target.value}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onTaskAdded(this.state.description);
        this.setState({description: ''});
    }

    render() {  
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Todo
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus
                    value={this.state.description} 
                    onChange={ this.onInputValueChange}/>
                </label>
            </form>
        );
    }
}