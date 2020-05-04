import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import TaskListProvider from '../context/TaskListContext';
import '../App.css';

const App = () => {
  return (
    <TaskListProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListProvider>
  );
};

export default App;
