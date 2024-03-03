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
exports.BetsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bet_schema_1 = require("./schemas/bet.schema");
const users_service_1 = require("../users/users.service");
const functions_1 = require("../../tools/functions");
const categories_service_1 = require("../categories/categories.service");
let BetsService = class BetsService {
    constructor(betsModel, usersService, categoriesService) {
        this.betsModel = betsModel;
        this.usersService = usersService;
        this.categoriesService = categoriesService;
    }
    async getAllBets() {
        try {
            return await this.betsModel.find();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getByIdBet(id) {
        try {
            return await this.betsModel.findById(id);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async createBet(betDto) {
        try {
            await this.usersService.checkUserById(betDto.id_user);
            const nowDate = new Date();
            const endDate = new Date(betDto.endDate);
            if (endDate.getTime() < nowDate.getTime()) {
                throw new common_1.BadRequestException('End date must be more than now');
            }
            const newBet = await new this.betsModel(betDto).save();
            return newBet;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async updateStatusByIdBet(id, status) {
        try {
            return await this.betsModel.findByIdAndUpdate(id, { status }, {
                new: true,
            });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getBidsByIdUser(id_user) {
        try {
            await this.usersService.checkUserById(id_user);
            return await this.betsModel.find({ id_user });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getBetsByIdCategory(id_category) {
        try {
            const existCategory = await this.categoriesService.checkCategoryById(id_category);
            if (!existCategory) {
                throw new common_1.BadRequestException('Category not found');
            }
            const bets = await this.betsModel.find({
                categories: { $in: [id_category] },
            });
            return bets;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async checkBetById(id) {
        try {
            (0, functions_1.checkIdForMongo)(id);
            const bet = await this.getByIdBet(id);
            if (!bet) {
                throw new common_1.BadRequestException('Invalid entered id_bet');
            }
            return true;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async checkBetAndUserById(id_bet, id_user) {
        try {
            (0, functions_1.checkIdForMongo)(id_bet);
            (0, functions_1.checkIdForMongo)(id_user);
            const betForUser = await this.betsModel.find({
                _id: id_bet,
                id_user: id_user,
            });
            if (betForUser.length === 0) {
                throw new common_1.BadRequestException('Not found bet for this user');
            }
            return true;
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
exports.BetsService = BetsService;
exports.BetsService = BetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bet_schema_1.Bet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        categories_service_1.CategoriesService])
], BetsService);
//# sourceMappingURL=bets.service.js.map