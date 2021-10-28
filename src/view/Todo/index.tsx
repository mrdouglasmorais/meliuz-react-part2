import React from 'react';
import { Provider as TodoProvider } from '../../context/TodoContext'

import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';

const Todo: React.FC = () => {
  return (
    <div>
      <h1>Todo</h1>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default Todo;