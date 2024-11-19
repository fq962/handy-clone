export interface JobRequest {
  idJobRequest: number;
  status: JobStatus;
  handyman: Handyman;
  reservationDate: string;
  reservationTime: string;
  observations: string;
}

export interface RequestedJobByUser {
  idJobRequest: number;
  createdAt: JobStatus;
  jobName: string;
  handyman: Handyman;
  reservationDateTime: string;
  observations: string;
  status: JobStatus;
}

export interface Handymen {
  idHandyman: number;
  handymanName: JobStatus;
  birthday: string;
  handyman: Handyman;
  observations: string;
  expertise: string;
  mail: string;
  rating: number;
}
export interface JobStatus {
  value: string;
  label: string;
}

export interface Handyman {
  value: string;
  label: string;
}

export interface JobType {
  idJobType: number;
  name: string;
  description: string;
  parent: JobTypeParent;
}

export interface JobTypeParent {
  idJobType: number;
  name: string;
}
