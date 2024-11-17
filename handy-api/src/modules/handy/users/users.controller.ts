import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateNewJobRequestDTO } from './dtos/create-job-request.dto';

@ApiTags('Handy')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async CreateJobRequest(@Body() bodyParams: CreateNewJobRequestDTO) {
    return this.usersService.CreateJobRequest(bodyParams);
  }
}
