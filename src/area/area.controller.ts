import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AreaService } from './area.service';
import { NetworkAreaDto } from './dto/network-area.dto';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post('push-changes')
  async pushAreaChanges(@Body() changes: NetworkAreaDto[]): Promise<boolean> {
    console.log('pushAreaChanges', changes);
    return this.areaService.pushAreaChanges(changes);
  }

  @Delete('delete-changes')
  async deleteAreaChanges(@Body() changes: string[]): Promise<boolean> {
    console.log('deleteAreaChanges', changes);
    return this.areaService.deleteAreaChanges(changes);
  }
}