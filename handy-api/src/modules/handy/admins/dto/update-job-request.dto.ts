/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateJobRequestDTO {
  @ApiProperty({
    description: 'Id of the request to be updated',
    example: 4,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  idJobRequest: number;

  @ApiProperty({
    description: 'New status of the request',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  idStatus: number;

  @ApiProperty({
    description: 'Handyman id to be assigned to the request',
    example: 2,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  idHandyman: number;

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
