import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as path from 'path';
async function bootstrap() {

  const server = express();
  server.locals.basedir = path.join(__dirname, '..', 'views');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(server));
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  app.setViewEngine('ejs');

  await app.listen(3000);

}

bootstrap();
