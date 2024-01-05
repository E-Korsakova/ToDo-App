import PropTypes from 'prop-types';

import Task from '../Task';
import './task-list.css';

function TaskList(props) {
  const { todos, onDeleted, onTaskCompleted, onTaskEditing, onSubmitEditing } = props;
  const elements = todos.map((task) => (
    <Task
      key={task.id}
      task={task}
      onDeleted={() => onDeleted(task.id)}
      onTaskCompleted={() => onTaskCompleted(task.id)}
      onTaskEditing={() => onTaskEditing(task.id)}
      onSubmitEditing={onSubmitEditing}
    />
  ));

  return <ul className="todo-list">{elements}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      created: PropTypes.number,
      id: PropTypes.string,
      completed: PropTypes.bool,
      editing: PropTypes.bool,
    })
  ),
  onDeleted: PropTypes.func.isRequired,
  onTaskCompleted: PropTypes.func.isRequired,
  onTaskEditing: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  todos: [],
};

export default TaskList;
