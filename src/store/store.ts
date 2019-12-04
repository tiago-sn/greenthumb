import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import { ApplicationState } from './types';

const store: Store<ApplicationState> = createStore(
  reducer,
  composeWithDevTools()
);

export default store;