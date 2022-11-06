import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {message: string} {

    console.log(85);
    
    return {message: 'Hello World!'} ;
  }
}
