import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { userChoicesReducer } from './reducer';
import { UserChoicesState } from './types';

const store: Store<UserChoicesState> = createStore(
  userChoicesReducer,
  composeWithDevTools()
);

export default store;