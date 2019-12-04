import {
  Action,
  SelectSunLight,
  SelectWater,
  SelectPets,
  RequestPlantList,
} from './types';
import {
  Sunlight,
  Water,
  Pets,
  RequestPlantListParams
} from '../service/api/types';

/**
 * Action Types (Redux Types). This is not Typescript types, that's why they
 * are not in the types.ts file.
 */
const SELECT_SUNLIGHT: SelectSunLight = "SELECT_SUNLIGHT";
const SELECT_WATER: SelectWater = "SELECT_WATER";
const SELECT_PETS: SelectPets = "SELECT_PETS";
const REQUEST_PLANT_LIST: RequestPlantList = "REQUEST_PLANT_LIST";

export const ActionTypes = {
  SELECT_SUNLIGHT,
  SELECT_WATER,
  SELECT_PETS,
  REQUEST_PLANT_LIST
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

  requestPlantlist: (userChoices: RequestPlantListParams): Action => ({
    type: REQUEST_PLANT_LIST,
    payload: userChoices
  })
}
