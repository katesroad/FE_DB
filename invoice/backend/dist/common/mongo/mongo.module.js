"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const invoice_schema_1 = require("./schemas/invoice.schema");
const config_1 = require("@nestjs/config");
let MongoModule = class MongoModule {
};
MongoModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const mongoConf = config.get('db.Mongo');
                    return Object.assign(Object.assign({}, mongoConf), { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
                },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: invoice_schema_1.Invoice.name, schema: invoice_schema_1.InvoiceSchema }]),
        ],
        exports: [
            mongoose_1.MongooseModule.forFeature([{ name: invoice_schema_1.Invoice.name, schema: invoice_schema_1.InvoiceSchema }]),
        ],
    })
], MongoModule);
exports.MongoModule = MongoModule;
//# sourceMappingURL=mongo.module.js.map