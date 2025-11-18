import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { AreaService } from './area.service';
import { NetworkArea } from './dto/network-area.dto';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';
import { User } from '../auth/user.decorator';

@UseGuards(FirebaseAuthGuard)
@Controller('areas')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post('synchronize')
  async upsertAreas(@Body() changes: NetworkArea[], @User() user: User): Promise<void> {
    await this.areaService.upsertAreas(changes, user.id);
  }

  @Delete('synchronize')
  async deleteAreasByIds(@Body() changes: string[], @User() user: User): Promise<void> {
    await this.areaService.deleteAreasByIds(changes, user.id);
  }
}