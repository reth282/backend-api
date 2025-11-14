import { IsString, IsNotEmpty } from 'class-validator';

export class NetworkArea {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}