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
exports.ChallengesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongo_1 = require("../../common/mongo");
let ChallengesService = class ChallengesService {
    constructor(challengeModel, solutionModel) {
        this.challengeModel = challengeModel;
        this.solutionModel = solutionModel;
    }
    getAllChallenges() {
        return this.challengeModel.find().then((docs) => this.cleanDocs(docs));
    }
    getChallengeByFemId(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`Chalenge id#${id} is invalid.`);
        }
        return this.challengeModel.findOne({ _id: id }).then((doc) => {
            if (doc)
                return this.cleanDocs([doc])[0];
            else
                throw new common_1.BadRequestException(`Can't find challegne #${id}`);
        });
    }
    getChallengesSolutions(id, queryDto) {
        const { offset = 0, limit = 5 } = queryDto;
        return this.solutionModel
            .find({ challenge: id })
            .sort({ updatedAt: -1 })
            .skip(offset)
            .limit(limit)
            .populate({
            path: 'author',
            model: mongo_1.Author.name,
            select: 'username avatar',
        })
            .exec()
            .then((docs) => this.cleanDocs(docs));
    }
    cleanDocs(docs) {
        return docs.map((doc) => {
            const _a = doc.toJSON(), { _id, author } = _a, data = __rest(_a, ["_id", "author"]);
            if (author)
                delete author._id;
            return Object.assign({ id: _id, author }, data);
        });
    }
};
ChallengesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(mongo_1.Challenge.name)),
    __param(1, mongoose_1.InjectModel(mongo_1.Solution.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ChallengesService);
exports.ChallengesService = ChallengesService;
//# sourceMappingURL=challenges.service.js.map