import { IsEmail, IsOptional, IsString } from '@nestjs/class-validator';

export class TaskDTO {
  @IsString()
  title: string;

  @IsEmail()
  body: string;
}
