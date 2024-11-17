import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { SupabaseService } from 'src/modules/database/supabase.service';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, SupabaseService],
})
export class AdminsModule {}
