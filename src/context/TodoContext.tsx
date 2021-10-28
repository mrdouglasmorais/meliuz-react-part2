import React, { useReducer, createContext } from 'react';
import {  ICountTodos, ICounterAction, IContextModel } from '../interface'

const defaultState: ICountTodos = {
  todos: []
}

const reducer = ( state: ICountTodos, action: ICounterAction ) => {
  switch (action.type) {
    case 'ADD': 
    return {
      ...state,
      todos: [ ...state.todos, action.payload ]
    };

    case 'DELETE': 
    return {
      ...state,
      todos: state.todos.filter((item) => item.id !== action.payload)
    };

    default:
      return state;
  }
}

export const Context = createContext({} as IContextModel);

export const Provider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, defaultState);
  return(
    <Context.Provider value={{state, dispatch}}>
      { children }
    </Context.Provider>
  )
}