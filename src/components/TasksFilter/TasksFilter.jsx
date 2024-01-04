import React from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

function TasksFilter(props) {

    const elements = props.filters.map((el) => {
        let classNames = 'filter ';
        if (el.selected) {
            classNames += 'selected';
        }
        
        return (
            <li key={el.filterName}>
                <button className={classNames}
                onClick={() => props.onFilterTasks(el.filterName)}
                >{el.filterName}</button>
            </li>
        )
    })
    
    return (
        <ul className="filters">
            { elements }
      </ul>
    );
}

TasksFilter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object),
    onFilterTasks: PropTypes.func.isRequired,
  };
  
TasksFilter.defaultProps = {
    filters: [
        {filtername: 'All', selected: true},
        {filtername: 'Active', selected: false},
        {filtername: 'Completed', selected: false}
      ]
  };

export default TasksFilter;