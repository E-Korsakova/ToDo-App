import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './footer.css';

export default function Footer(props) {
    return (
      <footer className="footer">
        <span className="todo-count">{props.count} items left</span>
        <TasksFilter filters={props.filters}
        onFilterTasks={props.onFilterTasks}/>
        <button className="clear-completed"
        onClick={props.onClearCompleted}
        >Clear completed</button>
      </footer>
    );
}