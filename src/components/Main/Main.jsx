import React from 'react';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css';

function Main(props) {

    const {todos, filters, count, onDeleted, onTaskCompleted, 
        onTaskEditing, onFilterTasks, onClearCompleted,
        onSubmitEditing } = props;

    return (
        <section className='main'>
            <TaskList todos={ todos }
            onDeleted={ onDeleted }
            onTaskCompleted={onTaskCompleted}
            onTaskEditing={onTaskEditing}
            onSubmitEditing={onSubmitEditing}/>
            <Footer count={count}
            filters={filters}
            onFilterTasks={onFilterTasks}
            onClearCompleted={onClearCompleted}/>
        </section>
    );
}

Main.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    filters: PropTypes.arrayOf(PropTypes.object),
    count: PropTypes.number,
    onDeleted: PropTypes.func.isRequired,
    onTaskCompleted: PropTypes.func.isRequired,
    onTaskEditing: PropTypes.func.isRequired,
    onFilterTasks: PropTypes.func.isRequired,
    onClearCompleted:PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
  };
  
Main.defaultProps = {
    todos: [],
    count: 0,
    filters: [
      {filtername: 'All', selected: true},
      {filtername: 'Active', selected: false},
      {filtername: 'Completed', selected: false}
    ]
  };

export default Main;