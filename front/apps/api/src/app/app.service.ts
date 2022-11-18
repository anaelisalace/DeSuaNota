import { Injectable } from '@nestjs/common';
import { Message } from '@project/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  getPieChartValue() {
    return { value: 82 };
  }

}


