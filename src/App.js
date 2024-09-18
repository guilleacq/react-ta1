import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import CardContainer from './components/CardContainer';
import TodoList from './components/TodoList';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App container">
      <h1 className="title" id="main-title">Lista de Tareas</h1>
      <CardContainer/>
      <TodoList/>
      <Counter/>
    </div>
  );
}

export default App;
