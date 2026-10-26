import { Injectable, NotFoundException } from '@nestjs/common';
import flights from './data/flights.json' with { type: 'json' };
import {
  destinationDetails,
  origin,
  aircraftDetails,
} from './data/flight-details.js';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

@Injectable()
export class AppService {
  getFlights() {
    return flights;
  }

  getFlightById(id: string) {
    const flight = (flights as unknown[]).find(
      (value) => isRecord(value) && value.id?.toString() === id,
    );
    if (!isRecord(flight)) {
      throw new NotFoundException(`Flight with id "${id}" not found`);
    }

    const destination = flight.destination as keyof typeof destinationDetails;
    const airline = flight.airline as keyof typeof aircraftDetails;
    const { airport, duration_minutes } = destinationDetails[destination];
    return {
      origin,
      destination_airport: airport,
      duration_minutes,
      ...aircraftDetails[airline],
      ...flight,
    };
  }
}
