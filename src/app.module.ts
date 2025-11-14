import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AreaModule } from './area/area.module';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el ConfigService esté disponible globalmente
    }),
    AreaModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
