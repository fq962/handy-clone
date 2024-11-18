export interface JobRequest {
  idJobRequest: number;
  status: JobStatus;
  handyman: Handyman;
  reservationDate: string;
  reservationTime: string;
  observations: string;
}

export interface JobStatus {
  value: string;
  label: string;
}

export interface Handyman {
  value: string;
  label: string;
}
