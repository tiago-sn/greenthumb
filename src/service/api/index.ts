import axios from 'axios';

import { RequestPlantListParams, Plant, FormData } from './types';

const baseUrl = "https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service"
export const rootURL = "/";
export const plantURL = "/plant"

const instance = axios.create({
  baseURL: baseUrl,
})

const api = {
  getRecomendedPlants: async (params: RequestPlantListParams) => {
    const response = await instance.get(baseUrl, {
      params
    });
    const data: Plant[] = response.data;

    return data;
  },

  getOnePlant: async (id: string) => {
    const response = await instance(plantURL, {
      params: id
    })
    const data: Plant = response.data;

    return data;
  },

  postForm: async (requestData: FormData) => {
    const response = await instance(rootURL, {
      method: 'post',
      data: requestData
    });
    const responseData = response.data;

    return responseData;
  }
}

export default api;