/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateNewJobRequestDTO {
  @ApiProperty({
    description: 'Id of the job type is going to be requested',
    example: 4,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  idJobType: number;

  @ApiProperty({
    description: 'Date of the job is going to be requested',
    example: '2024-11-20',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  reservationDate: string;

  @ApiProperty({
    description: 'Time of the job is going to be requested',
    example: '08:30',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  reservationTime: string;

  @ApiProperty({
    description: 'Some observations of the handyman',
    example: 'He is a very good handyman',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  observations: string;
}
