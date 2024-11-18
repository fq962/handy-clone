import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateNewHandymanDTO } from './dto/create-handyman.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateJobRequestDTO } from './dto/update-job-request.dto';

@ApiTags('Handy')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async CreateHandyman(@Body() bodyParams: CreateNewHandymanDTO) {
    return this.adminsService.CreateHandyman(bodyParams);
  }

  @Patch('/UpdateJobRequest')
  async UpdateJobRequest(@Body() bodyParams: UpdateJobRequestDTO) {
    return this.adminsService.UpdateJobRequest(bodyParams);
  }

  @Get('/GetRequestedJobs')
  async GetRequestedJobs() {
    return this.adminsService.GetRequestedJobs();
  }
}
