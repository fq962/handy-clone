import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { SupabaseService } from '../database/supabase.service';
import { AdminsService } from './admins/admins.service';
import { AdminsController } from './admins/admins.controller';

@Module({
  controllers: [AdminsController, UsersController],
  imports: [
    RouterModule.register([
      {
        path: 'handy',
        module: HandyModule,
        children: [
          {
            path: 'users',
            module: UsersModule,
          },
          {
            path: 'admins',
            module: AdminsModule,
          },
        ],
      },
    ]),
  ],
  providers: [AdminsService, UsersService, SupabaseService],
})
export class HandyModule {}
