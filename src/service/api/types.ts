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
  id: 1,
  name: "Euphorbia eritrea",
  sun: "high",
  water: "rarely",
  url: "https://front-static-recruitment.s3.amazonaws.com/euphorbia-eritrea.jpg",
  price: 25,
  toxicity: false
}
