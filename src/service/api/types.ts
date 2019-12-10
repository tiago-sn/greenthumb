export type Sunlight = "high" | "low" | "no" | "";
export type Water = "daily" | "regularly" | "rarely" | "";
export type Pets = "true" | "false" | "";

export interface RequestPlantListParams {
  sun: Sunlight;
  water: Water;
  pets: Pets
}

export interface FormData {
  name: string;
  email: string;
  id: string;
}

export interface Plant {
  id: number;
  name: string;
  sun: string;
  water: string;
  url: string;
  price: number;
  toxicity: boolean;
}
