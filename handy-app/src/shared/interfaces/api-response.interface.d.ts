export type Translation<T> = Record<string, T>;

export interface ApiResponse<T> {
  isSuccess?: boolean;
  data: T;
  message: string;
  count?: number;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
