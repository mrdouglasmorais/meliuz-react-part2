import { createStore } from 'redux';

import AllPersons from './modules/reducer';

const store = createStore(AllPersons);

export default store;