import React, {Component} from 'react';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css';

export default class Main extends Component {
    state = {
        todoData: [
            {description: "Completed task", created: "created 17 seconds ago", id: 1},
            {description: "Editing task", created: "created 5 minutes ago", id: 2},
            {description: "Active task", created: "created 5 minutes ago", id: 3},
        ]
    };

    deleteTask = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newArr = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];
            
            return {
                todoData: newArr
            };
        });  
    };

    render() {
        return (
            <section className='main'>
                <TaskList todos={this.state.todoData}
                onDeleted={this.deleteTask} />
                <Footer />
            </section>
            );
    };
}