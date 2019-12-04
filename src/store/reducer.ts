import {
  UserChoicesState,
  UserChoicesActions,
} from './types';
import { userChoicesActionTypes } from './actions';

const INITIAL_STATE: UserChoicesState = {
  sun: '',
  water: '',
  pets: ''
}

export function userChoicesReducer(
  state = INITIAL_STATE,
  action: UserChoicesActions
): UserChoicesState {
  switch (action.type) {
    case userChoicesActionTypes.SELECT_SUNLIGHT:
      return {
        ...state,
        sun: action.payload,
      }
    case userChoicesActionTypes.SELECT_WATER:
      return {
        ...state,
        water: action.payload,
      }
    case userChoicesActionTypes.SELECT_PETS:
      return {
        ...state,
        pets: action.payload
      }
    default:
      return state;
  }
}