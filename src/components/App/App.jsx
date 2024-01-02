import React, {Component} from 'react';
import Header from '../Header'
import NewTaskForm from "../NewTaskForm";
import Main from '../Main';
import './app.css';

export default class App extends Component {

    maxId = 100;

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

    addTask = (text) => {
        const newTask = {
            description: text,
            created: Date.now(),
            id: Math.random().toString(36).slice(2),
        }

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newTask
            ];

            return {
                todoData: newArr
            }
        })

    }
  
    render() {
        console.log(this.state.todoData);
        return (
            <section className='todoapp'>
                <Header />
                <NewTaskForm onTaskAdded={this.addTask}/>
                <Main todos={this.state.todoData}
                onDeleted={this.deleteTask}/>
            </section>
        )
    }
  }