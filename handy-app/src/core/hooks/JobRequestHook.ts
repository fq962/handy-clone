import { useCallback, useEffect, useState } from "react";
import { GetJobRequest } from "@/core/services/JobRequest";
import { useJobRequestStore } from "./states/JobsStore";

export const useJobRequests = () => {
  const { jobs, setJobs } = useJobRequestStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await GetJobRequest();

      // Solo actualiza si los datos son diferentes
      if (JSON.stringify(jobs) !== JSON.stringify(response.data)) {
        setJobs(response.data);
      }
    } catch (err) {
      setError("Failed to fetch job requests: " + err);
    } finally {
      setLoading(false);
    }
  }, [jobs, setJobs]);

  useEffect(() => {
    if (jobs.length === 0) {
      fetchData(); // Llama a fetchData si no hay datos
    }
  }, [fetchData]); // Elimina jobs del array de dependencias

  // Ahora retorna también fetchData
  return { jobs, loading, error, fetchData };
};
