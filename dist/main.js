"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const path = require("path");
async function bootstrap() {
    const server = express();
    server.locals.basedir = path.join(__dirname, '..', 'views');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.useStaticAssets(path.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
    app.setViewEngine('pug');
    app.setViewEngine('ejs');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map