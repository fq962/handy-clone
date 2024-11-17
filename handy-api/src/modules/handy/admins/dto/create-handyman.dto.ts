/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class CreateNewHandymanDTO {
  @ApiProperty({
    description: 'First name of the handyman',
    example: 'Carlos Perez',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'second name of the handyman',
    example: 'Torres',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  secondName: string;

  @ApiProperty({
    description: 'Date of birtday of the handyman',
    example: '2000-06-09',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  birthday: string;

  @ApiProperty({
    description: 'Email of the handyman',
    example: 'test@test.com',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  mail: string;

  @ApiProperty({
    description: 'Rating stars from 1 to 5 of the handyman',
    example: 5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({
    description: 'Expertise and experience of the handyman',
    example: 'Residential plumbing',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  expertise: string;

  @ApiProperty({
    description: 'Some observations of the handyman',
    example: 'He is a very good handyman',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  observations: string;

  @ApiProperty({
    description: 'Some skills the handyman has',
    example: ['Plumbing', 'Electricity'],
    required: true,
  })
  @IsNotEmpty()
  @IsArray()
  skills: Array<string>;
}
