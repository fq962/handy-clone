// src/services/apiService.js
import axios from "axios";
import { ApiResponse } from "@/shared/interfaces/api-response.interface";
import { Handymen } from "@/shared/interfaces/job.interface";

const { VITE_API_URL } = import.meta.env;

export const GetHandymen = async (): Promise<ApiResponse<Handymen[]>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/admins/GetHandymen`;

  try {
    const response = await axios.get<ApiResponse<Handymen[]>>(
      `${URL_TO_FETCH}`
    );

    return response.data; // Devuelve la respuesta en el formato esperado
  } catch (error) {
    console.error("Error in GetHandymen:", error);
    throw error;
  }
};

export const CreateNewHandymen = async (props: {
  firstName: string;
  secondName: string;
  birthday: string;
  mail: string;
  rating: number;
  expertise: string;
  observations: string;
  skills?: string[];
}): Promise<ApiResponse<unknown>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/admins/CreateHandyman`;

  try {
    const response = await axios.post<ApiResponse<unknown>>(
      URL_TO_FETCH,
      props,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error in CreateHandyman:", error);
    throw error;
  }
};
