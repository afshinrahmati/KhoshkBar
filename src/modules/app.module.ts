import { Module } from '@nestjs/common';
import { AppController } from '../actions/app.controller';
import { AppService } from '../services/app.service';
import * as path from 'path';
import { I18nModule } from 'nestjs-i18n';
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
      },
     viewEngine: 'ejs'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
