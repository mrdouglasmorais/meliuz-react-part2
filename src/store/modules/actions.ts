import { IPerson } from './types';

export function addNewPerson(person: IPerson){
  return {
    type: 'ADD_PERSON',
    payload: {
      person
    }
  }
}