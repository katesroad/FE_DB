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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = exports.Author = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Author = class Author {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Author.prototype, "username", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Author.prototype, "avatar", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Author.prototype, "github", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Author.prototype, "proUser", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Author.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Author.prototype, "updatedAt", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Author.prototype, "location", void 0);
Author = __decorate([
    mongoose_1.Schema({ versionKey: true })
], Author);
exports.Author = Author;
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);
//# sourceMappingURL=author.schema.js.map