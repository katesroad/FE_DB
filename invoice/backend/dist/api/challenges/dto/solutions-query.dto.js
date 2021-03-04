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
exports.SolutionsQueryDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SolutionsQueryDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_transformer_1.Transform(({ value }) => {
        const offset = parseInt(value);
        return isNaN(offset) ? 0 : Math.max(offset, 0);
    }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SolutionsQueryDto.prototype, "offset", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_transformer_1.Transform(({ value }) => {
        const limit = parseInt(value);
        return isNaN(limit) ? 5 : Math.min(Math.max(limit, 5), 100);
    }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SolutionsQueryDto.prototype, "limit", void 0);
exports.SolutionsQueryDto = SolutionsQueryDto;
//# sourceMappingURL=solutions-query.dto.js.map