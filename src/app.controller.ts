import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('flights')
  async getFlights() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('Simulated flights error');

    // return { message: 'Invalid flights data' };

    // return [];

    return this.appService.getFlights();
  }

  @Get('flights/:id')
  async getFlightById(@Param('id') id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('Simulated details error');

    return this.appService.getFlightById(id);
  }
}
