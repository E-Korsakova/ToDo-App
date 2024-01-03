import React from 'react';
import './tasks-filter.css';

export default function TasksFilter(props) {

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

