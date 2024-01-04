import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';
import './footer.css';

class Footer extends Component {

  render() {
    const {count, filters, onClearCompleted, onFilterTasks} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{count} items left</span>
        <TasksFilter filters={filters}
        onFilterTasks={onFilterTasks}/>
        <button className="clear-completed"
        onClick={onClearCompleted}
        >Clear completed</button>
      </footer>
    );
  }
}

Footer.propTypes = {
  count: PropTypes.number,
  filters: PropTypes.arrayOf(PropTypes.object),
  onFilterTasks: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  count: 0,
  filters: [
    {filtername: 'All', selected: true},
    {filtername: 'Active', selected: false},
    {filtername: 'Completed', selected: false}
  ]
}

export default Footer;