import { Controller, Get,Render } from '@nestjs/common';
import { Slider } from 'src/types/slider';
import { AppService } from '../services/app.service';
import { I18n, I18nContext } from 'nestjs-i18n';
import { request } from 'http';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('api/Home/home')
  async getHello(@I18n() i18n: I18nContext) {
    
    return this.appService.getHello(i18n);
    
  }
}
