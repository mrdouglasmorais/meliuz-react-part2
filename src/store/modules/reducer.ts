import { Reducer } from 'redux';
import { IAllPersons } from './types';

const INITIAL_STATE: IAllPersons = {
  persons: []
}

const AllPersons: Reducer<IAllPersons | any> = ( state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'ADD_PERSON': {
      console.log(action.payload)
      const { person } = action.payload

      return {
        ...state,
        persons: [
          ...state.persons,
          person
        ]
      }
    }

    default: {
      return state
    }
  }
}

export default AllPersons;
