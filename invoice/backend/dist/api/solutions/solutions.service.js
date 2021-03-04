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
exports.SolutionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../common/mongo/schemas");
let SolutionsService = class SolutionsService {
    constructor(solutionModel) {
        this.solutionModel = solutionModel;
    }
    async rateSolution(id, rate) {
        const solution = await this.solutionModel.findOne({ _id: id }, { like: 1, dislike: 1 });
        if (!solution) {
            throw new common_1.BadRequestException(` soltion #${id} does not exist`);
        }
        const { like, dislike } = solution;
        return this.solutionModel.updateOne({ _id: id }, {
            like: like + (rate.like || 0),
            dislike: dislike + (rate.dislile || 0),
        });
    }
};
SolutionsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(schemas_1.Solution.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SolutionsService);
exports.SolutionsService = SolutionsService;
//# sourceMappingURL=solutions.service.js.map