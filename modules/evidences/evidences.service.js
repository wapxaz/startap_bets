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
exports.EvidencesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const evidence_schema_1 = require("./schemas/evidence.schema");
const mongoose_2 = require("mongoose");
const bets_service_1 = require("../bets/bets.service");
const users_service_1 = require("../users/users.service");
let EvidencesService = class EvidencesService {
    constructor(evidencesModel, betsService, usersService) {
        this.evidencesModel = evidencesModel;
        this.betsService = betsService;
        this.usersService = usersService;
    }
    async getEvidencesByIdBet(id_bet) {
        try {
            await this.betsService.checkBetById(id_bet);
            return await this.evidencesModel.find({ id_bet });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getEvidencesByIdBetAndIdUser(id_bet, id_user) {
        try {
            await this.betsService.checkBetById(id_bet);
            await this.usersService.checkUserById(id_user);
            return await this.evidencesModel.find({ id_bet, id_user });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async createEvidence(createEvidenceDto) {
        try {
            await this.betsService.checkBetById(createEvidenceDto.id_bet);
            await this.usersService.checkUserById(createEvidenceDto.id_user);
            const newEvidence = await new this.evidencesModel(createEvidenceDto).save();
            return newEvidence;
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
exports.EvidencesService = EvidencesService;
exports.EvidencesService = EvidencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(evidence_schema_1.Evidence.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        bets_service_1.BetsService,
        users_service_1.UsersService])
], EvidencesService);
//# sourceMappingURL=evidences.service.js.map