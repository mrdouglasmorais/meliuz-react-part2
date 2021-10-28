import { ITodoItem, ICounterAction } from '../interface';

export const addTodo = (todo: ITodoItem): ICounterAction => ({
  type: "ADD",
  payload: todo
})

export const deleteTodo = (id: string): ICounterAction => ({
  type: "DELETE",
  payload: id
})