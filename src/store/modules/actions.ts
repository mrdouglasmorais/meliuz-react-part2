import { IPerson } from './types';

interface IAction{
  type: string;
  payload: {
    person: IPerson;
  };
}

export function addNewPerson(person: IPerson): IAction{
  return {
    type: 'ADD_PERSON',
    payload: {
      person
    }
  }
}