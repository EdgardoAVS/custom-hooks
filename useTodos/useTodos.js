import { useEffect, useReducer } from 'react'
import { todoReducer } from './TodoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem("TODOs")) || [];
};

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  
  useEffect(() => {
    localStorage.setItem("TODOs", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    // if (todos.includes(newTodo)) return;
    const action = {
      type: "[TODO] add todo",
      payload: newTodo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] remove todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };
    dispatch(action);
  };

  const totalTodos = () => {
    return todos.length
  }

  const pendingTodos = () => {
    return todos.filter(todo => !todo.done).length
  }

  return {
    totalTodos,
    pendingTodos,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}

