import { UserChoicesActions } from './types';
import { Sunlight, Water, Pets } from '../service/api/types';
import { SelectSunLight, SelectWater, SelectPets } from './types';

/**
 * Action Types (Redux Types). This is not Typescript types, that's why they
 * are not in the types.ts file.
 */

const SELECT_SUNLIGHT: SelectSunLight = "SELECT_SUNLIGHT";
const SELECT_WATER: SelectWater = "SELECT_WATER";
const SELECT_PETS: SelectPets = "SELECT_PETS";

export const ActionTypes = {
  SELECT_SUNLIGHT,
  SELECT_WATER,
  SELECT_PETS
}

/**
 * Action Creators 
 */

export function selectSunlight(sunlight: Sunlight): UserChoicesActions {
  return {
    type: SELECT_SUNLIGHT,
    payload: sunlight
  }
}

export function selectWater(water: Water): UserChoicesActions {
  return {
    type: SELECT_WATER,
    payload: water,
  }
}

export function selectPets(pets: Pets): UserChoicesActions {
  return {
    type: SELECT_PETS,
    payload: pets
  }
}