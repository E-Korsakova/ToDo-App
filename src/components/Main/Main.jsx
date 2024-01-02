import React from 'react';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css';

export default function Main(props) {

    const {todos, onDeleted} = props;

    return (
        <section className='main'>
            <TaskList todos={ todos }
            onDeleted={ onDeleted }/>
            <Footer />
        </section>
    );
}