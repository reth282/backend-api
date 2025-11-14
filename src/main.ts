import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';
import { PrismaService } from '../prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  
  const prisma = app.get(PrismaService);
  process.on('beforeExit', async () => {
    await app.close();
  });

  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new PrismaExceptionFilter()
  );

  await app.listen(config.get<number>('PORT') ?? 3000);
}
bootstrap().catch(console.error);