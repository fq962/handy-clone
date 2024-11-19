import { useState } from "react";
import { UpdateJobRequest } from "@/core/services/JobRequest";
import { useJobRequests } from "./JobRequestHook";

export const useJobRequestUpdate = (
  onSuccess: () => void,
  onError?: (error: unknown) => void
) => {
  const [isSaving, setIsSaving] = useState(false);
  const { fetchData } = useJobRequests(); // Extrae la función fetchData del hook de obtener datos

  const updateJobRequest = async (jobRequestData: {
    idJobRequest: number;
    idStatus: number;
    idHandyman: number;
    reservationDate: string;
    reservationTime: string;
    observations: string;
  }) => {
    setIsSaving(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await UpdateJobRequest({
        idJobRequest: jobRequestData.idJobRequest,
        idStatus: Number(jobRequestData.idStatus),
        idHandyman: Number(jobRequestData.idHandyman),
        reservationDate: jobRequestData.reservationDate,
        reservationTime: jobRequestData.reservationTime,
        observations: jobRequestData.observations,
      });

      // Llama a la función para volver a obtener los datos
      await fetchData();
      // Opcionalmente llama a `onSuccess`
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error updating job request:", error);
      if (onError) onError(error);
    } finally {
      setIsSaving(false);
    }
  };

  return { updateJobRequest, isSaving };
};
