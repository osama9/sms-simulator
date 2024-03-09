import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSMSDto } from './dto/create-sms.dto';
import { SMS } from './entities/sms.entity';
import { SmsService } from './sms.service';
import { log } from 'console';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}
  @Post()
  async create(@Body() createSMSDto: CreateSMSDto): Promise<SMS> {
    return this.smsService.create(createSMSDto);
  }

  @Get('/:mobile_number')
  async find(@Param('mobile_number') mobile_number: string): Promise<SMS[]> {
    return this.smsService.find(mobile_number);
  }
}
