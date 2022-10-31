import React from 'react';
import './App.css';
import TodoList from './components/Todolist';

function App() {
  return (
    <div className="App">
      <TodoList description='Go to coffee' date='1.11.2022' priority='Low' />
    </div>
  );
}

export default App;
