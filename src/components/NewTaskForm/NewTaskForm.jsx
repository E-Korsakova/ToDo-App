import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

class NewTaskForm extends Component {

    state = {
        description: ''
    }

    onInputValueChange = (e) => {
        this.setState(({description: e.target.value}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const description = this.state.description.trim();
        if (description !== '') {
            this.props.onTaskAdded(this.state.description);
        }
        
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

NewTaskForm.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
}

export default NewTaskForm;