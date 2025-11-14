import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AreaModule } from './area/area.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el ConfigService esté disponible globalmente
    }),
    AreaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
