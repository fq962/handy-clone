import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/modules/database/supabase.service';
import { DB_CREATE_RESPONSE, DB_GET_RESPONSE } from 'src/utils/db-response';
import { CreateNewHandymanDTO } from './dto/create-handyman.dto';
import { UpdateJobRequestDTO } from './dto/update-job-request.dto';

const SCHEMA = 'public';

@Injectable()
export class AdminsService {
  private supabase: SupabaseClient<any, 'public', any>;

  constructor(private readonly supabaseService: SupabaseService) {
    // super();
    this.supabase = this.supabaseService.supabase;
  }

  async CreateHandyman(bodyParams: CreateNewHandymanDTO) {
    const { data, error } = await this.supabase
      .schema(SCHEMA)
      .rpc('ft_create_new_handyman', { p_data: bodyParams });

    if (error) {
      return new DB_CREATE_RESPONSE(
        null,
        'Handyman',
        error,
        'Error',
      ).sendResponse();
    }

    return new DB_CREATE_RESPONSE(
      data,
      'Handyman',
      null,
      'Creado',
    ).sendResponse();
  }

  async UpdateJobRequest(bodyParams: UpdateJobRequestDTO) {
    const { data, error } = await this.supabase
      .schema(SCHEMA)
      .rpc('ft_update_job_request', { p_data: bodyParams });

    if (error) {
      return new DB_CREATE_RESPONSE(
        null,
        'Job Request',
        error,
        'Error',
      ).sendResponse();
    }

    return new DB_CREATE_RESPONSE(
      data,
      'Job Request',
      null,
      'Updated',
    ).sendResponse();
  }

  async GetRequestedJobs() {
    const { data, error } = await this.supabase
      .schema(SCHEMA)
      .rpc('ft_get_all_requested_jobs');

    if (error) {
      return new DB_GET_RESPONSE(
        null,
        'Jobs Requested',
        error,
        'Error',
      ).sendResponse();
    }

    return new DB_GET_RESPONSE(
      data,
      'Job Requested',
      null,
      'Selected',
    ).sendResponse();
  }

  async GetHandymen() {
    const { data, error } = await this.supabase
      .schema(SCHEMA)
      .rpc('ft_get_all_handymen');

    if (error) {
      return new DB_GET_RESPONSE(
        null,
        'Handymen Requested',
        error,
        'Error',
      ).sendResponse();
    }

    return new DB_GET_RESPONSE(
      data,
      'Handymen Requested',
      null,
      'Selected',
    ).sendResponse();
  }

  async GetStatus() {
    const { data, error } = await this.supabase
      .schema(SCHEMA)
      .rpc('ft_get_jobs_status');

    if (error) {
      return new DB_GET_RESPONSE(
        null,
        'Status Requested',
        error,
        'Error',
      ).sendResponse();
    }

    return new DB_GET_RESPONSE(
      data,
      'Status Requested',
      null,
      'Selected',
    ).sendResponse();
  }
}
