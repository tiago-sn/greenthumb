import axios from 'axios';

import { RequestPlantListParams, Plant, FormData } from './types';

const baseURL = "https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service"
export const rootURL = "/";
export const plantURL = "/plant"

const instance = axios.create({
  baseURL
})

const api = {
  getPlantList: async (params: RequestPlantListParams) => {
    const response = await instance.get(rootURL, { params });
    const data: Plant[] = response.data;

    return data;
  },

  getOnePlant: async (id: string) => {
    const response = await instance.get(plantURL, { params: id });
    const data: Plant = response.data;

    return data;
  },

  postForm: async (data: FormData) => {
    const response = await instance.post(rootURL, { data });
    const responseData = response.data;

    return responseData;
  }
}

export default api;