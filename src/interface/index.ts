import React from 'react';

export type ICounterAction = 
  | { type: 'ADD', payload: ITodoItem } 
  | { type: 'DELETE', payload: string };

export interface ITodoItem{
  id: string;
  title: string;
  active: boolean;
}

export interface ICountTodos{
  todos: ITodoItem[];
}

export interface IContextModel{
  state: ICountTodos;
  dispatch: React.Dispatch<ICounterAction>
}