import { useCallback, useEffect, useState } from "react";
import { GetJobRequest } from "@/core/services/JobRequest";
import { useJobRequestStore } from "./states/JobsStore";
import _ from "lodash";

export const useJobRequests = () => {
  const { jobs, setJobs } = useJobRequestStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await GetJobRequest();
      const newJobs = response.data;

      // Solo actualiza si los datos son diferentes
      if (!_.isEqual(jobs, newJobs)) {
        setJobs(newJobs);
      }
    } catch (err) {
      setError("Failed to fetch job requests: " + err);
    } finally {
      setLoading(false);
    }
  }, [jobs, setJobs]);

  useEffect(() => {
    if (!jobs.length) {
      fetchData(); // Llama a fetchData si no hay datos
    }
  }, [jobs, fetchData]);

  // Ahora retorna también fetchData
  return { jobs, loading, error, fetchData };
};
