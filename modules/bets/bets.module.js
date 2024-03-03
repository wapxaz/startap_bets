"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetsModule = void 0;
const common_1 = require("@nestjs/common");
const bets_service_1 = require("./bets.service");
const bets_controller_1 = require("./bets.controller");
const mongoose_1 = require("@nestjs/mongoose");
const bet_schema_1 = require("./schemas/bet.schema");
const users_module_1 = require("../users/users.module");
const categories_module_1 = require("../categories/categories.module");
let BetsModule = class BetsModule {
};
exports.BetsModule = BetsModule;
exports.BetsModule = BetsModule = __decorate([
    (0, common_1.Module)({
        controllers: [bets_controller_1.BetsController],
        providers: [bets_service_1.BetsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bet_schema_1.Bet.name, schema: bet_schema_1.BetSchema }]),
            users_module_1.UsersModule,
            categories_module_1.CategoriesModule,
        ],
        exports: [bets_service_1.BetsService],
    })
], BetsModule);
//# sourceMappingURL=bets.module.js.map