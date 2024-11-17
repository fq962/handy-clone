import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './modules/database/supabase.module';
import { HandyModule } from './modules/handy/handy.module';

@Module({
  imports: [ConfigModule.forRoot({}), HandyModule, SupabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
