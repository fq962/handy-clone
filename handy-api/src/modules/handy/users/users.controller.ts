import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateNewJobRequestDTO } from './dtos/create-job-request.dto';

@ApiTags('Handy')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/CreateReservation')
  async CreateJobRequest(@Body() bodyParams: CreateNewJobRequestDTO) {
    return this.usersService.CreateJobRequest(bodyParams);
  }

  @Get('/LimitJobTypes')
  async GetLimitJobTypes() {
    return this.usersService.GetLimitJobTypes();
  }
}
