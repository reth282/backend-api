import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { AreaService } from './../src/area/area.service';
import { NetworkArea } from './../src/area/dto/network-area.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('AreaService (e2e)', () => {
  let areaService: AreaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [AreaService],
    }).compile();

    areaService = moduleFixture.get<AreaService>(AreaService);
  });

  it('should create and retrieve areas', async () => {
    const area: NetworkArea = { id: '1', name: 'Test Area' };
    await areaService.pushAreaChanges([area]);

    const areas = await areaService.pushAreaChanges([area]);
    expect(areas).toBeDefined();
  });
});
