import { create } from "zustand";
import { persist } from "zustand/middleware";
import { JobRequest } from "@/shared/interfaces/job.interface";

interface JobState {
  jobs: JobRequest[];
  setJobs: (jobs: JobRequest[]) => void;
  clearJobs: () => void;
}

export const useJobRequestStore = create<JobState>()(
  persist(
    (set) => ({
      jobs: [],
      setJobs: (jobs) => set({ jobs }),
      clearJobs: () => set({ jobs: [] }),
    }),
    {
      name: "job-store", // Nombre de la clave en localStorage
      partialize: (state) => ({ jobs: state.jobs }), // Selecciona qué partes del estado se persisten
    }
  )
);
