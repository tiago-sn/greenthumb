import {
  RequestPlantListParams,
  Sunlight,
  Water,
  Pets,
  Plant
} from '../service/api/types';

export interface ApplicationState extends RequestPlantListParams {
  plants: Plant[]
}

/**
 * Action Types (Typescript types)
 */

export type SelectSunLight = "SELECT_SUNLIGHT";
export type SelectWater = "SELECT_WATER";
export type SelectPets = "SELECT_PETS";
export type RequestPlantList = "REQUEST_PLANT_LIST";
export type RequestPlantListSucceeded = "REQUEST_PLANT_LIST_SUCCEEDED";

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

export interface RequestPlantListAction {
  type: RequestPlantList;
  payload: RequestPlantListParams;
}

export interface RequestPlantListSucceededAction {
  type: RequestPlantListSucceeded;
  payload: Plant[];
}

export type Action =
  SelectSunlightAction |
  SelectWaterAction |
  SelectPetsAction |
  RequestPlantListAction |
  RequestPlantListSucceededAction;
