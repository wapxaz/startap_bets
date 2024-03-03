"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidsModule = void 0;
const common_1 = require("@nestjs/common");
const bids_service_1 = require("./bids.service");
const bids_controller_1 = require("./bids.controller");
const mongoose_1 = require("@nestjs/mongoose");
const bid_schema_1 = require("./schemas/bid.schema");
const users_module_1 = require("../users/users.module");
const bets_module_1 = require("../bets/bets.module");
let BidsModule = class BidsModule {
};
exports.BidsModule = BidsModule;
exports.BidsModule = BidsModule = __decorate([
    (0, common_1.Module)({
        controllers: [bids_controller_1.BidsController],
        providers: [bids_service_1.BidsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bid_schema_1.Bid.name, schema: bid_schema_1.BidSchema }]),
            users_module_1.UsersModule,
            bets_module_1.BetsModule,
        ],
    })
], BidsModule);
//# sourceMappingURL=bids.module.js.map