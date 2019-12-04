import {
  UserChoicesState,
  UserChoicesActions,
  SelectSunLight,
  SelectWater,
  SelectPets,

  RequestPlantListAction,
  RequestPlantList,
} from './types';
import { Sunlight, Water, Pets } from '../service/api/types';

/**
 * Action Types (Redux Types). This is not Typescript types, that's why they
 * are not in the types.ts file.
 */

const SELECT_SUNLIGHT: SelectSunLight = "SELECT_SUNLIGHT";
const SELECT_WATER: SelectWater = "SELECT_WATER";
const SELECT_PETS: SelectPets = "SELECT_PETS";


export const userChoicesActionTypes = {
  SELECT_SUNLIGHT,
  SELECT_WATER,
  SELECT_PETS,
}

/**
 * Action Creators 
 */

export const userChoicesActionCreators = {
  selectPets: (pets: Pets): UserChoicesActions => {
    return {
      type: SELECT_PETS,
      payload: pets
    }
  },

  selectWater: (water: Water): UserChoicesActions => {
    return {
      type: SELECT_WATER,
      payload: water,
    }
  },

  selectSunlight: (sunlight: Sunlight): UserChoicesActions => {
    return {
      type: SELECT_SUNLIGHT,
      payload: sunlight
    }
  }
}

/**
 *  ---------------------------------- PLANTS ----------------------------------------
 */

const REQUEST_PLANT_LIST: RequestPlantList = "REQUEST_PLANT_LIST";

export const plantsActionTypes = {
  REQUEST_PLANT_LIST
}


export const requestPlantlistActionCreator = (
  userChoices: UserChoicesState
): RequestPlantListAction => ({
  type: REQUEST_PLANT_LIST,
  payload: userChoices
});

