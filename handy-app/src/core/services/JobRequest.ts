// src/services/apiService.js
import axios from "axios";
import { ApiResponse } from "@/shared/interfaces/api-response.interface";
import { JobRequest } from "@/shared/interfaces/job.interface";

const { VITE_API_URL } = import.meta.env;

export const GetJobRequest = async (): Promise<ApiResponse<JobRequest[]>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/admins/GetRequestedJobs`;

  return await fetch(URL_TO_FETCH).then(async (response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  });
};

export const UpdateJobRequest = async (props: {
  idJobRequest: number;
  idStatus: number;
  idHandyman: number;
  reservationDate: string;
  reservationTime: string;
  observations: string;
}): Promise<ApiResponse<unknown>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/admins/UpdateJobRequest`;

  try {
    const response = await axios.patch<ApiResponse<unknown>>(
      URL_TO_FETCH,
      props,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Devuelve la respuesta en el formato esperado
  } catch (error) {
    console.error("Error in UpdateJobRequest:", error);
    throw error; // Lanza el error para que pueda ser manejado por el código que lo llama
  }
};
