import { Injectable } from '@nestjs/common';
import { NetworkArea } from './dto/network-area.dto';
import { PrismaService } from '../../prisma/prisma.service';

type UpsertResult = { id: string, name: string };

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async upsertAreas(changes: NetworkArea[]): Promise<void> {
    const upsertOperations = changes.map(change =>
      this.prisma.area.upsert({
        where: { id: change.id },
        update: { name: change.name },
        create: { id: change.id, name: change.name },
      }),
    );
    await this.prisma.$transaction<Promise<UpsertResult>[]>(upsertOperations as any); 
  }

  async deleteAreasByIds(ids: string[]): Promise<number> {
    const { count } = await this.prisma.area.deleteMany({
      where: { id: { in: ids } },
    });
    return count;
  }
}