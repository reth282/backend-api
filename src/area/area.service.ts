import { Injectable } from '@nestjs/common';
import { NetworkArea } from './dto/network-area.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async upsertAreas(changes: NetworkArea[]): Promise<void> {
    await this.prisma.$transaction(
      changes.map(({ id, name }) =>
        this.prisma.area.upsert({
          where: { id },
          update: { name },
          create: { id, name },
        })
      )
    );
  }

  async deleteAreasByIds(ids: string[]): Promise<void> {
    await this.prisma.area.deleteMany({
      where: { id: { in: ids } },
    });
  }
}