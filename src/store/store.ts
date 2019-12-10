import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import { ApplicationState } from './types';
import fetchPlantListSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(fetchPlantListSaga)



export default store;