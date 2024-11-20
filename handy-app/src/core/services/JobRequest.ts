// src/services/apiService.js
import axios from "axios";
import { ApiResponse } from "@/shared/interfaces/api-response.interface";
import {
  JobRequest,
  JobStatus,
  JobType,
  RequestedJobByUser,
} from "@/shared/interfaces/job.interface";

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

export const GetLimitJobTypes = async (): Promise<ApiResponse<JobType[]>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/users/LimitJobTypes`;

  try {
    const response = await axios.get<ApiResponse<JobType[]>>(URL_TO_FETCH);

    return response.data; // Devuelve la respuesta en el formato esperado
  } catch (error) {
    console.error("Error in GetLimitJobTypes:", error);
    throw error; // Lanza el error para que pueda ser manejado por el código que lo llama
  }
};

export const GetAllRequestedJobsByUser = async (props: {
  idUser: string;
}): Promise<ApiResponse<RequestedJobByUser[]>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/users/RequestedJobsByUser`;

  try {
    const response = await axios.get<ApiResponse<RequestedJobByUser[]>>(
      `${URL_TO_FETCH}?idUser=${props.idUser}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in GetLimitJobTypes:", error);
    throw error;
  }
};

export const PostNewReservation = async (props: {
  userId: string;
  idJobType: number;
  reservationDate: string;
  reservationTime: string;
  observations: string;
}): Promise<ApiResponse<unknown>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/users/CreateReservation`;

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
    console.error("Error in CreateReservation:", error);
    throw error;
  }
};
export const GetStatus = async (): Promise<ApiResponse<JobStatus[]>> => {
  const URL_TO_FETCH = `${VITE_API_URL}/admins/GetStatus`;

  try {
    const response = await axios.get<ApiResponse<JobStatus[]>>(
      `${URL_TO_FETCH}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in GetLimitJobTypes:", error);
    throw error;
  }
};
