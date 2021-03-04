"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = app.get(config_1.ConfigService);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidUnknownValues: true,
    }));
    app.use(rateLimit({
        windowMs: 1000,
        max: 10,
    }));
    app.use(helmet());
    const port = config.get('app.port') || 3000;
    await app.listen(port, () => {
        console.log(`\n
    ==============================================================
           Server started at port:${port}
    ==============================================================
    \n`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map