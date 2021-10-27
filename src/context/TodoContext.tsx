import React, { useReducer, createContext } from 'react';
import { ITodos } from '../interface'

const defaultState: ITodos = {
  todos: []
}

const reducer = ( state: ITodos, action: any ) => {
  switch (action.type) {
    case 'ADD': 
    return {
      ...state,
      todos: [ ...state.todos, action.payload ]
    };

    case 'DELETE': 
    return {
      ...state,
      todos: state.todos.filter((item) => item !== action.payload)
    };

    default:
      return state;
  }
}

export const Context = createContext({});

export const Provider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, defaultState);
  return(
    <Context.Provider value={{state, dispatch}}>
      { children }
    </Context.Provider>
  )
}