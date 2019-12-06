import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../service/api';
import { Plant } from '../service/api/types';
import { RequestPlantListAction } from '../store/types';
import { ActionCreators, ActionTypes } from '../store/actions';

function* fetchPlantList(action: RequestPlantListAction) {
  try {
    const data: Plant[] = yield call(api.getPlantList, action.payload);

    yield put(
      ActionCreators.RequestPlantListSucceeded(data)
    );
  } catch(e) {
    console.log(e);
  }
}

export default function* watchFatchPlantList() {
  yield takeLatest(ActionTypes.REQUEST_PLANT_LIST, fetchPlantList);
}