import {
  RequestPlantListParams,
  Sunlight,
  Water,
  Pets,
  Plant
} from '../service/api/types';

/**
 * ---------------------- USER CHOICES -----------------------------
 */

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

export type UserChoicesActions =
  SelectSunlightAction |
  SelectWaterAction |
  SelectPetsAction;

/**
 * --------------------- PLANTS ------------------------
 */

export interface PlantsState {
  plants: Plant[]
}

/**
 * Action Type (Typescript type)
 */

export type RequestPlantList = "REQUEST_PLANT_LIST";

/**
 * Action Interfaces (Typescript Action Types)
 */

export interface RequestPlantListAction {
  type: RequestPlantList;
  payload: UserChoicesState;
}
