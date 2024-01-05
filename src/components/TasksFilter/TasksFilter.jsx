import PropTypes from 'prop-types';

import './tasks-filter.css';

function TasksFilter(props) {
  const { filters, onFilterTasks } = props;
  const elements = filters.map((el) => {
    let classNames = 'filter ';
    if (el.selected) {
      classNames += 'selected';
    }

    return (
      <li key={el.filterName}>
        <button type="button" className={classNames} onClick={() => onFilterTasks(el.filterName)}>
          {el.filterName}
        </button>
      </li>
    );
  });

  return <ul className="filters">{elements}</ul>;
}

TasksFilter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      filtername: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  onFilterTasks: PropTypes.func.isRequired,
};

TasksFilter.defaultProps = {
  filters: [
    { filtername: 'All', selected: true },
    { filtername: 'Active', selected: false },
    { filtername: 'Completed', selected: false },
  ],
};

export default TasksFilter;
