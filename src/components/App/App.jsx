import { Component } from 'react';

import Header from '../Header';
import NewTaskForm from '../NewTaskForm';
import Main from '../Main';
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [],

      filters: [
        { filterName: 'All', selected: true },
        { filterName: 'Active', selected: false },
        { filterName: 'Completed', selected: false },
      ],
    };
    this.createTodoTask = (description) => ({
      description,
      created: Date.now(),
      id: Math.random().toString(36).slice(2),
      completed: false,
      editing: false,
    });

    this.toggleProp = (arr, id, propName) => {
      const index = arr.findIndex((el) => el.id === id);
      const oldTask = arr[index];
      const newTask = { ...oldTask, [propName]: !oldTask[propName] };

      return arr.with(index, newTask);
    };
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  addTask = (description) => {
    const newTask = this.createTodoTask(description);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newTask];

      return {
        todoData: newArr,
      };
    });
  };

  editTask = (newDescription, id) => {
    if (newDescription.trim() !== '') {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.id === id);
        const oldTask = todoData[index];
        const newTask = { ...oldTask, description: newDescription };

        return {
          todoData: todoData.with(index, newTask),
        };
      });
    }
    this.onTaskEditing(id);
  };

  onTaskCompleted = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProp(todoData, id, 'completed'),
    }));
  };

  onTaskEditing = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProp(todoData, id, 'editing'),
    }));
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.completed);
      return {
        todoData: newArr,
      };
    });
  };

  filter = () => {
    const { todoData, filters } = this.state;
    const selectFilter = filters.filter((el) => el.selected)[0];
    let newArr = [];
    if (selectFilter.filterName === 'Active') {
      newArr = todoData.filter((el) => !el.completed);
      return newArr;
    }
    if (selectFilter.filterName === 'Completed') {
      newArr = todoData.filter((el) => el.completed);
      return newArr;
    }
    return todoData;
  };

  onFilterTasks = (id) => {
    this.setState(({ filters }) => {
      const filter = filters.filter((el) => el.filterName === id)[0];
      const index = filters.findIndex((filt) => filt.filterName === id);
      const selectFilter = { ...filter, selected: true };
      return {
        filters: [
          { filterName: 'All', selected: false },
          { filterName: 'Active', selected: false },
          { filterName: 'Completed', selected: false },
        ].with(index, selectFilter),
      };
    });
  };

  render() {
    const { todoData, filters } = this.state;
    const selectTodos = this.filter();
    const activeTaskCount = todoData.filter((el) => !el.completed).length;
    return (
      <section className="todoapp">
        <Header />
        <NewTaskForm onTaskAdded={this.addTask} />
        <Main
          todos={selectTodos}
          filters={filters}
          count={activeTaskCount}
          onDeleted={this.deleteTask}
          onTaskCompleted={this.onTaskCompleted}
          onTaskEditing={this.onTaskEditing}
          onSubmitEditing={this.editTask}
          onFilterTasks={this.onFilterTasks}
          onClearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}
