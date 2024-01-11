import { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

class Task extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    newDescription: '',
    isSet: false,
  };

  onEditInputChange = (e) => {
    this.setState({
      newDescription: e.target.value,
      isSet: true,
    });
  };

  Edit = () => {
    const {
      onSubmitEditing,
      task: { description, id },
    } = this.props;
    const { newDescription, isSet } = this.state;
    let viewDesc = newDescription;
    if (newDescription === '' && !isSet) viewDesc = description;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitEditing(newDescription, id);
        }}
      >
        <input type="text" className="edit" value={viewDesc} onChange={this.onEditInputChange} />
      </form>
    );
  };

  render() {
    const { task, onDeleted, onTaskCompleted, onTaskEditing } = this.props;
    const { description, created, completed, editing } = task;

    let classNames = 'active';

    if (completed) {
      classNames = 'completed';
    }

    if (editing) {
      classNames = 'editing ';
      this.Edit();
    }

    const date = formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true });

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onTaskCompleted} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{date}</span>
          </label>
          <button type="button" aria-label="Edit task" className="icon icon-edit" onClick={onTaskEditing} />
          <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <this.Edit />
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    created: PropTypes.number,
    id: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
  }).isRequired,

  onDeleted: PropTypes.func.isRequired,
  onTaskCompleted: PropTypes.func.isRequired,
  onTaskEditing: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Task;
