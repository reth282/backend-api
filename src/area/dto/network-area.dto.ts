import { IsString, IsNotEmpty } from 'class-validator';

export class NetworkAreaDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}