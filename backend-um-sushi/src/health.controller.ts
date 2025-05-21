import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('healthcheck')
export class HealthController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth() {
    return this.appService.getHealthCheck('ok');
  }
}
