import {
  ApplicationState,
  Action,
} from './types';
import { ActionTypes } from './actions';

const INITIAL_STATE: ApplicationState = {
  sun: '',
  water: '',
  pets: '',
  plants: []
}

export default function reducer(
  state = INITIAL_STATE,
  action: Action
): ApplicationState {
  switch (action.type) {
    case ActionTypes.SELECT_SUNLIGHT:
      return {
        ...state,
        sun: action.payload,
      }
    case ActionTypes.SELECT_WATER:
      return {
        ...state,
        water: action.payload,
      }
    case ActionTypes.SELECT_PETS:
      return {
        ...state,
        pets: action.payload
      }
    case ActionTypes.REQUEST_PLANT_LIST_SUCCEEDED:
      return {
        ...state,
        plants: action.payload
      }
    default:
      return state;
  }
}