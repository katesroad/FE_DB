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
exports.ChallengesController = void 0;
const common_1 = require("@nestjs/common");
const challenges_service_1 = require("./challenges.service");
const solutions_query_dto_1 = require("./dto/solutions-query.dto");
let ChallengesController = class ChallengesController {
    constructor(challengesService) {
        this.challengesService = challengesService;
    }
    getAllChallenges() {
        return this.challengesService.getAllChallenges();
    }
    getChallengeByFemId(id) {
        return this.challengesService.getChallengeByFemId(id);
    }
    getChallengesSolutions(id, queryDto) {
        return this.challengesService.getChallengesSolutions(id, queryDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChallengesController.prototype, "getAllChallenges", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChallengesController.prototype, "getChallengeByFemId", null);
__decorate([
    common_1.Get(':id/solutions'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, solutions_query_dto_1.SolutionsQueryDto]),
    __metadata("design:returntype", void 0)
], ChallengesController.prototype, "getChallengesSolutions", null);
ChallengesController = __decorate([
    common_1.Controller('v1/challenges'),
    __metadata("design:paramtypes", [challenges_service_1.ChallengesService])
], ChallengesController);
exports.ChallengesController = ChallengesController;
//# sourceMappingURL=challenges.controller.js.map