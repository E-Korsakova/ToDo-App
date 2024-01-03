import React from 'react';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css';

export default function Main(props) {

    const {todos, filters, count, onDeleted, onTaskCompleted, 
        onTaskEditing, onFilterTasks, onClearCompleted} = props;

    return (
        <section className='main'>
            <TaskList todos={ todos }
            onDeleted={ onDeleted }
            onTaskCompleted={onTaskCompleted}
            onTaskEditing={onTaskEditing}/>
            <Footer count={count}
            filters={filters}
            onFilterTasks={onFilterTasks}
            onClearCompleted={onClearCompleted}/>
        </section>
    );
}