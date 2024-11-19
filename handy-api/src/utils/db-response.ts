/* eslint-disable prettier/prettier */
import { PostgrestError } from '@supabase/supabase-js';

export class DB_GET_RESPONSE<T> {
  data: T;
  dataName: string;
  error: PostgrestError | null = null;
  errorDefault = 'Unkown error';
  constructor(
    data: T,
    dataName: string,
    error: PostgrestError | null = null,
    errorDefault?: string,
  ) {
    this.data = data;
    this.error = error;
    this.dataName = dataName;
    if (errorDefault) this.errorDefault = errorDefault;
  }

  sendResponse(): API_GET_RESPONSE<T> {
    if (this.error) {
      return this.sendErrorResponse();
    }
    return this.sendSuccessGetResponse();
  }

  sendSuccessGetResponse() {
    const count = Array.isArray(this.data) ? this.data.length : 1;

    return {
      isSuccess: true,
      message: `${this.dataName} obtenid(as/os) correctamente`,
      count,
      data: this.data,
    };
  }

  sendErrorResponse() {
    return {
      isSuccess: false,
      message: this.error?.message || this.errorDefault,
      count: 0,
      data: null,
      errorCode: this.error?.code || 'UNKNOWN_ERROR_CODE',
    };
  }
}

export class DB_CREATE_RESPONSE<T> {
  data: T;
  dataName: string;
  error: PostgrestError | null = null;
  errorDefault = 'Unkown error';
  constructor(
    data: T,
    dataName: string,
    error: PostgrestError | null = null,
    errorDefault?: string,
  ) {
    this.data = data;
    this.error = error;
    this.dataName = dataName;
    if (errorDefault) this.errorDefault = errorDefault;
  }

  sendResponse(): API_CREATE_RESPONSE<T> {
    if (this.error) {
      return this.sendErrorResponse();
    }
    return this.sendSuccessCreateResponse();
  }

  sendSuccessCreateResponse() {
    return {
      isSuccess: true,
      message: `${this.dataName} sent correctly`,
      data: this.data,
    };
  }

  sendErrorResponse() {
    return {
      isSuccess: false,
      message: this.error?.message || this.errorDefault,
      count: 0,
      data: null,
      errorCode: this.error?.code || 'UNKNOWN_ERROR_CODE',
    };
  }
}

export interface API_GET_RESPONSE<T> {
  isSuccess: boolean;
  message: string;
  count: number;
  data: T | null;
  errorCode?: string;
}

export interface API_CREATE_RESPONSE<T> {
  message: string;
  data: T | null;
  errorCode?: string;
}
