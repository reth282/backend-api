import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AreaService } from './area.service';
import { NetworkArea } from './dto/network-area.dto';

@Controller('areas')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post('synchronize')
  async upsertAreas(@Body() changes: NetworkArea[]): Promise<boolean> {
    return this.areaService.upsertAreas(changes);
  }

  @Delete('synchronize')
  async deleteAreasByIds(@Body() changes: string[]): Promise<boolean> {
    return this.areaService.deleteAreasByIds(changes);
  }
}