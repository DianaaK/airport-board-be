import { Injectable, NotFoundException } from '@nestjs/common';
import flights from './data/flights.json' with { type: 'json' };
import {
  destinationDetails,
  origin,
  aircraftDetails,
} from './data/flight-details.js';

@Injectable()
export class AppService {

  getFlights() {
    return flights;
  }

  getFlightById(id: string) {
    const flight = flights.find((flight) => flight.id === id);
    if (!flight) {
      throw new NotFoundException(`Flight with id "${id}" not found`);
    }

    const { airport, duration_minutes } =
      destinationDetails[flight.destination];
    return {
      ...flight,
      origin,
      destination_airport: airport,
      duration_minutes,
      ...aircraftDetails[flight.airline],
    };
  }
}
