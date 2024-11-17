/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

@Injectable()
export class SupabaseService {
  public readonly supabase: SupabaseClient<any, 'public', any> = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  );

  constructor() {
    // this.supabase.auth.signInWithPassword({
    //   email: process.env.SCRAP_EMAIL,
    //   password: process.env.SCRAP_PASSWORD,
    // });
  }
}
