import { Injectable } from '@nestjs/common';
import { NetworkArea } from './dto/network-area.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async upsertAreas(changes: NetworkArea[], userId: string): Promise<void> {
    await this.prisma.$transaction(
      changes.map(({ id, name }) =>
        this.prisma.area.upsert({
          where: { userId_id: { userId, id } },
          update: { name },
          create: { id, name, userId },
        })
      )
    );
  }

  async deleteAreasByIds(ids: string[], userId: string): Promise<void> {
    await this.prisma.area.deleteMany({
      where: { id: { in: ids }, userId },
    });
  }
}