import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
async function bootstrap() {
  const server = express();
  server.locals.basedir = join(__dirname, '..', 'views');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(server));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  await app.listen(3000);
}
bootstrap();
