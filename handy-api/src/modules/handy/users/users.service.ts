import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/modules/database/supabase.service';
import { CreateNewJobRequestDTO } from './dtos/create-job-request.dto';
import { DB_CREATE_RESPONSE } from 'src/utils/db-response';
// import { DB_RESPONSE } from 'src/utils/db-response';

const SCHEMA = 'public';
// const SINGULAR_NAME = 'product';

@Injectable()
export class UsersService {
  private supabase: SupabaseClient<any, 'public', any>;

  constructor(private readonly supabaseService: SupabaseService) {
    // super();
    this.supabase = this.supabaseService.supabase;
  }

  async CreateJobRequest(bodyParams: CreateNewJobRequestDTO) {
    console.log(bodyParams);

    const { data, error } = await this.supabase
      .schema(SCHEMA)
      .rpc('ft_create_new_job_request', { p_data: bodyParams });

    if (error) {
      return new DB_CREATE_RESPONSE(null, 'Job', error, 'Error').sendResponse();
    }

    return new DB_CREATE_RESPONSE(data, 'Job', null, 'Creado').sendResponse();
  }
}
