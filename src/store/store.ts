import { createStore, Store, combineReducers } from 'redux'

import { userChoicesReducer } from './reducer';
import { ApplicationState } from './types';

const rootReducer = combineReducers(
  userChoicesReducer
)

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;