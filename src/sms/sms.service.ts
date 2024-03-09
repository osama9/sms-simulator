import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SMS } from './entities/sms.entity';
import { Repository } from 'typeorm';
import { CreateSMSDto } from './dto/create-sms.dto';

@Injectable()
@Dependencies(getRepositoryToken(SMS))
export class SmsService {
  smsRepository: Repository<SMS>;
  constructor(smsRepository) {
    this.smsRepository = smsRepository;
  }

  create(sms: CreateSMSDto) {
    const newSMS = new SMS();
    newSMS.lang = 'ar';
    newSMS.mobile_number = sms.recipient;
    newSMS.message = sms.body;
    return this.smsRepository.save(newSMS);
  }

  find(mobile): Promise<SMS[]> {
    console.log('service', mobile);
    return this.smsRepository.find({
      where: { mobile_number: mobile },
      order: { id: 'DESC' },
      take: 10,
    });
  }

  async remove(id) {
    await this.smsRepository.delete(id);
  }
}
