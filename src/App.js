import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
    <TodoList />
    <input type="text"/>
    <button> Add Todo</button>
    <button>Clear compleated todo</button>
    <div> 0 left todo</div>
    </>
  )
}

export default App;
