import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';
import flights from '../src/data/flights.json' with { type: 'json' };

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

  afterEach(async () => {
    await app.close();
  });

  it('/flights returns the original list', async () => {
    const response = await request(app.getHttpServer())
      .get('/flights')
      .expect(200);
    expect(response.body).toEqual(flights);
  });

  it('/flights/41 returns the drawer details', async () => {
    const response = await request(app.getHttpServer())
      .get('/flights/41')
      .expect(200);
    expect(response.body).toMatchObject({
      ...flights.find((flight) => flight.id === '41'),
      origin: { code: 'OTP', city: 'Bucharest' },
      destination_airport: { code: 'BCN', city: 'Barcelona' },
      duration_minutes: 190,
      aircraft: 'Airbus A321',
      registration: 'HA-LZX',
    });
  });

  it('returns complete details for every listed flight', async () => {
    for (const flight of flights) {
      const response = await request(app.getHttpServer())
        .get(`/flights/${flight.id}`)
        .expect(200);
      expect(response.body).toMatchObject(flight);
      expect(response.body.destination_airport.code).toMatch(/^[A-Z]{3}$/);
      expect(response.body.destination_airport.latitude).toEqual(
        expect.any(Number),
      );
      expect(response.body.destination_airport.longitude).toEqual(
        expect.any(Number),
      );
      expect(response.body.duration_minutes).toBeGreaterThan(0);
      expect(response.body.aircraft).toEqual(expect.any(String));
      expect(response.body.registration).toEqual(expect.any(String));
    }
  });

  it.each(['unknown', '0', '101'])('/flights/%s returns 404', async (id) => {
    await request(app.getHttpServer()).get(`/flights/${id}`).expect(404);
  });
});
