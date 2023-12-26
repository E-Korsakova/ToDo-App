import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import NewTaskForm from "./components/NewTaskForm";
import Main from './components/Main';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => {

  return (
      <section className='todoapp'>
          <Header />
          <NewTaskForm />
          <Main />
      </section>
  )
}

const rootEl = document.getElementById('root')
const root = createRoot(rootEl);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
