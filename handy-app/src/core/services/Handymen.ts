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
    throw error; // Lanza el error para que pueda ser manejado por el código que lo llama
  }
};
