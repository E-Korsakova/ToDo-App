import { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

class NewTaskForm extends Component {
  state = {
    description: '',
  };

  onInputValueChange = (e) => {
    this.setState({ description: e.target.value });
  };

  onSubmit = (e) => {
    const { onTaskAdded } = this.props;
    const { description } = this.state;
    e.preventDefault();
    const testDescription = description.trim();
    if (testDescription !== '') {
      onTaskAdded(description);
    }

    this.setState({ description: '' });
  };

  render() {
    const { description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Todo
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={description}
            onChange={this.onInputValueChange}
          />
        </label>
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};

export default NewTaskForm;
