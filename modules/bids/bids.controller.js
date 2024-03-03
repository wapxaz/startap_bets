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
exports.BidsController = void 0;
const common_1 = require("@nestjs/common");
const bids_service_1 = require("./bids.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_bid_dto_1 = require("./dto/create-bid.dto");
const calculation_bid_dto_1 = require("./dto/calculation-bid.dto");
let BidsController = class BidsController {
    constructor(bidsService) {
        this.bidsService = bidsService;
    }
    getAllBids() {
        return this.bidsService.getAllBids();
    }
    calculationBid(calculateBidDto) {
        return this.bidsService.calculationBid(calculateBidDto);
    }
    createBid(createBidDto, id_bet) {
        return this.bidsService.createBid(createBidDto, id_bet);
    }
};
exports.BidsController = BidsController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Получить список всех ставок',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BidsController.prototype, "getAllBids", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('calculation'),
    (0, swagger_1.ApiOperation)({
        summary: 'Меняет статус пари на завершенное, в зависимости от того, кто выиграл и рассчитывает, а именно отнимает сумму у одного юзера из кошелька и начисляет другому.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calculation_bid_dto_1.CalculateBidDto]),
    __metadata("design:returntype", Promise)
], BidsController.prototype, "calculationBid", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id_bet'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Сделать ставку на определенное пари',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id_bet')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bid_dto_1.CreateBidDto, String]),
    __metadata("design:returntype", Promise)
], BidsController.prototype, "createBid", null);
exports.BidsController = BidsController = __decorate([
    (0, swagger_1.ApiTags)('bids'),
    (0, common_1.Controller)('bids'),
    __metadata("design:paramtypes", [bids_service_1.BidsService])
], BidsController);
//# sourceMappingURL=bids.controller.js.map