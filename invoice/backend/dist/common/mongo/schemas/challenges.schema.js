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
exports.ChallengeSchema = exports.Challenge = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Challenge = class Challenge {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Challenge.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Challenge.prototype, "solutions", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Challenge.prototype, "languages", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Challenge.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Challenge.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Challenge.prototype, "difficulty", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Challenge.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Challenge.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Challenge.prototype, "updatedAt", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Challenge.prototype, "crawledAt", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Challenge.prototype, "heroImg", void 0);
Challenge = __decorate([
    mongoose_1.Schema({ versionKey: false })
], Challenge);
exports.Challenge = Challenge;
exports.ChallengeSchema = mongoose_1.SchemaFactory.createForClass(Challenge);
//# sourceMappingURL=challenges.schema.js.map