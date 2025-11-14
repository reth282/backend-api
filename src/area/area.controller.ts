import { Body, Controller, Delete, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AreaService } from './area.service';
import { NetworkArea } from './dto/network-area.dto';

@Controller('areas')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post('synchronize')
  async upsertAreas(@Body() changes: NetworkArea[]): Promise<void> {
    await this.areaService.upsertAreas(changes);
  }

  @Delete('synchronize')
  async deleteAreasByIds(@Body() changes: string[]): Promise<void> {
    await this.areaService.deleteAreasByIds(changes);
  }
}