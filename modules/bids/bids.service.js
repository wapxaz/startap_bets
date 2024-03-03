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
exports.BidsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bid_schema_1 = require("./schemas/bid.schema");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
const bets_service_1 = require("../bets/bets.service");
const functions_1 = require("../../tools/functions");
let BidsService = class BidsService {
    constructor(bidsModel, usersService, betsService) {
        this.bidsModel = bidsModel;
        this.usersService = usersService;
        this.betsService = betsService;
    }
    async getAllBids() {
        try {
            return await this.bidsModel.find();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getByIdBid(id) {
        try {
            (0, functions_1.checkIdForMongo)(id);
            return await this.bidsModel.findById(id);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async createBid(createBidDto, id_bet) {
        try {
            await this.betsService.checkBetById(id_bet);
            await this.usersService.checkUserById(createBidDto.id_offered_user);
            await this.usersService.checkUserById(createBidDto.id_argued_user);
            await this.betsService.checkBetAndUserById(id_bet, createBidDto.id_offered_user);
            const newBid = await new this.bidsModel({
                id_bet: id_bet,
                id_offered_user: createBidDto.id_offered_user,
                id_argued_user: createBidDto.id_argued_user,
                sum: createBidDto.sum,
            }).save();
            return newBid;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async calculationBid(calculateBidDto) {
        try {
            const bid = await this.getByIdBid(calculateBidDto.id_bid);
            let idWinner = bid.id_offered_user;
            let idLoser = bid.id_argued_user;
            if (!calculateBidDto.offeredUserWin) {
                idWinner = bid.id_argued_user;
                idLoser = bid.id_offered_user;
            }
            const newBalanceWin = (await this.usersService.getUserBalanceById(idWinner)) + bid.sum;
            const newBalanceLoser = (await this.usersService.getUserBalanceById(idLoser)) - bid.sum;
            if (newBalanceLoser < 0) {
                throw new common_1.BadRequestException('The loser does not have enough funds on his balance');
            }
            await this.usersService.updateUserBalance(idWinner, {
                balance: newBalanceWin,
            });
            await this.usersService.updateUserBalance(idLoser, {
                balance: newBalanceLoser,
            });
            await this.bidsModel.findByIdAndUpdate(calculateBidDto.id_bid, { id_winner: idWinner }, {
                new: true,
            });
            await this.betsService.updateStatusByIdBet(bid.id_bet, true);
            return true;
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
exports.BidsService = BidsService;
exports.BidsService = BidsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bid_schema_1.Bid.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        bets_service_1.BetsService])
], BidsService);
//# sourceMappingURL=bids.service.js.map