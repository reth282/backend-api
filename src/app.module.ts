import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AreaModule } from './area/area.module';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AreaModule,
    PrismaModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
