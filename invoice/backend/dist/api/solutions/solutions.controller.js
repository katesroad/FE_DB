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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionsController = void 0;
const common_1 = require("@nestjs/common");
const solutions_service_1 = require("./solutions.service");
let SolutionsController = class SolutionsController {
    constructor(solutionsService) {
        this.solutionsService = solutionsService;
    }
    rateSolution(id, rate) {
        return this.solutionsService.rateSolution(id, rate);
    }
};
__decorate([
    common_1.Post(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "rateSolution", null);
SolutionsController = __decorate([
    common_1.Controller('/v1/solutions'),
    __metadata("design:paramtypes", [solutions_service_1.SolutionsService])
], SolutionsController);
exports.SolutionsController = SolutionsController;
//# sourceMappingURL=solutions.controller.js.map