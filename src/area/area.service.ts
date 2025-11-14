import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { NetworkAreaDto } from './dto/network-area.dto';

@Injectable()
export class AreaService {
  private prisma = new PrismaClient();

  async pushAreaChanges(changes: NetworkAreaDto[]): Promise<boolean> {
    for (const change of changes) {
      await this.prisma.area.upsert({
        where: { id: change.id },
        update: { name: change.name },
        create: { id: change.id, name: change.name },
      });
    }
    return true;
  }

  async deleteAreaChanges(changes: string[]): Promise<boolean> {
    await this.prisma.area.deleteMany({
      where: { id: { in: changes } },
    });
    return true;
  }
}