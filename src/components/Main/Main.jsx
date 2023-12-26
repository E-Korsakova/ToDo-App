import React from 'react';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css';

export default function Main() {
 
    const todoData = [
        {description: "Completed task", created: "created 17 seconds ago", className: "completed", id: 1},
        {description: "Editing task", created: "created 5 minutes ago", className: "editing", id: 2},
        {description: "Active task", created: "created 5 minutes ago", className: "", id: 3},
    ];

    return (
        <section className='main'>
            <TaskList todos={todoData}/>
            <Footer />
        </section>
        );
}