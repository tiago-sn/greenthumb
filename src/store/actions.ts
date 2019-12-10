import {
  Action,
  SelectSunLight,
  SelectWater,
  SelectPets,
  RequestPlantList,
  RequestPlantListSucceeded
} from './types';
import {
  Sunlight,
  Water,
  Pets,
  RequestPlantListParams,
  Plant
} from '../service/api/types';

/**
 * Action Types (Redux Types). This is not Typescript types, that's why they
 * are not in the types.ts file.
 */
const SELECT_SUNLIGHT: SelectSunLight = "SELECT_SUNLIGHT";
const SELECT_WATER: SelectWater = "SELECT_WATER";
const SELECT_PETS: SelectPets = "SELECT_PETS";
const REQUEST_PLANT_LIST: RequestPlantList = "REQUEST_PLANT_LIST";
const REQUEST_PLANT_LIST_SUCCEEDED: RequestPlantListSucceeded = "REQUEST_PLANT_LIST_SUCCEEDED";

export const ActionTypes = {
  SELECT_SUNLIGHT,
  SELECT_WATER,
  SELECT_PETS,
  REQUEST_PLANT_LIST,
  REQUEST_PLANT_LIST_SUCCEEDED
}

/**
 * Action Creators 
 */

export const ActionCreators = {
  selectPets: (pets: Pets): Action => ({
    type: SELECT_PETS,
    payload: pets
  }),

  selectWater: (water: Water): Action => ({
    type: SELECT_WATER,
    payload: water,
  }),

  selectSunlight: (sunlight: Sunlight): Action => ({
    type: SELECT_SUNLIGHT,
    payload: sunlight
  }),

  requestPlantList: (userChoices: RequestPlantListParams): Action => ({
    type: REQUEST_PLANT_LIST,
    payload: userChoices
  }),

  RequestPlantListSucceeded: (plants: Plant[]): Action => ({
    type: REQUEST_PLANT_LIST_SUCCEEDED,
    payload: plants
  })
}
