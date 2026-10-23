import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('flights')
  getFlights() {
    return this.appService.getFlights();
  }

  @Get('flights/:id')
  getFlightById(@Param('id') id: string) {
    return this.appService.getFlightById(id);
  }
}
