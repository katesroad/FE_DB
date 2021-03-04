"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongo_1 = require("../../common/mongo");
const mongoose_2 = require("mongoose");
let InvoiceService = class InvoiceService {
    constructor(invoiceModel) {
        this.invoiceModel = invoiceModel;
    }
    getInvoices() {
        return this.invoiceModel
            .find()
            .then((docs) => docs.map((doc) => this.cleanDoc(doc)));
    }
    getInvoice(id) {
        return this.invoiceModel.findOne({ tag: id }).then((doc) => {
            if (!doc)
                throw new common_1.NotFoundException(`Can't find invoice with id#${id}`);
            return this.cleanDoc(doc);
        });
    }
    createInvoice(createInvoiceDto) {
        const { items = [] } = createInvoiceDto, data = __rest(createInvoiceDto, ["items"]);
        let total = 0;
        items.map((item) => {
            item.total = item.price * item.quantity;
            total += item.total;
        });
        return this.invoiceModel
            .create(Object.assign(Object.assign({}, data), { total, items }))
            .then((doc) => this.cleanDoc(doc))
            .catch((e) => e);
    }
    updateInvoice(id, updateInvoiceDto) {
        return this.invoiceModel.findOneAndUpdate({ _id: id }, updateInvoiceDto);
    }
    cleanDoc(doc) {
        const _a = doc.toJSON(), { _id } = _a, data = __rest(_a, ["_id"]);
        return Object.assign({ id: _id }, data);
    }
};
InvoiceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(mongo_1.Invoice.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map