import React, {Component} from 'react';
import Header from '../Header'
import NewTaskForm from "../NewTaskForm";
import Main from '../Main';
import './app.css';

export default class App extends Component {

    addTask = (text) => {
      console.log('added', text);
    }
  
    render() {
        return (
            <section className='todoapp'>
                <Header />
                <NewTaskForm onTaskAdded={this.addTask}/>
                <Main />
            </section>
        )
    }
  }