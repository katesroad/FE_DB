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
exports.SolutionSchema = exports.Solution = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const author_schema_1 = require("./author.schema");
const challenges_schema_1 = require("./challenges.schema");
let Solution = class Solution {
};
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose_2.Types.ObjectId, ref: challenges_schema_1.Challenge.name }),
    __metadata("design:type", String)
], Solution.prototype, "challenge", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose_2.Types.ObjectId, ref: author_schema_1.Author.name }),
    __metadata("design:type", String)
], Solution.prototype, "author", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Solution.prototype, "repoURL", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Solution.prototype, "liveURL", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Solution.prototype, "submittedAt", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Solution.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Solution.prototype, "updatedAt", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Solution.prototype, "like", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Solution.prototype, "dislike", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Solution.prototype, "stacks", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Solution.prototype, "views", void 0);
Solution = __decorate([
    mongoose_1.Schema({ versionKey: false })
], Solution);
exports.Solution = Solution;
exports.SolutionSchema = mongoose_1.SchemaFactory.createForClass(Solution);
//# sourceMappingURL=solutions.schema.js.map