import {
  RequestPlantListParams,
  Plant,
  FormData,
  Sunlight,
  Water,
  Pets
} from '../service/api/types';

export interface ApplicationState {
  userChoices: UserChoicesState
  plantList: Plant[];
  selectedPlant: Plant;
  userData: FormData
}

export interface UserChoicesState extends RequestPlantListParams { }

/**
 * Action Types (Typescript types)
 */

export type SelectSunLight = "SELECT_SUNLIGHT";
export type SelectWater = "SELECT_WATER";
export type SelectPets = "SELECT_PETS";

/**
 * Action Interfaces (Typescript Action Types)
 */

interface SelectSunlightAction {
  type: SelectSunLight;
  payload: Sunlight;
}

interface SelectWaterAction {
  type: SelectWater;
  payload: Water;
}

interface SelectPetsAction {
  type: SelectPets;
  payload: Pets;
}

export type UserChoicesActions = SelectSunlightAction | SelectWaterAction | SelectPetsAction;