import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SMS } from './entities/sms.entity';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SMS])],
  providers: [SmsService],
  controllers: [SmsController],
})
export class SmsModule {}
