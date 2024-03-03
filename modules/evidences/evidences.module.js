"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidencesModule = void 0;
const common_1 = require("@nestjs/common");
const evidences_service_1 = require("./evidences.service");
const evidences_controller_1 = require("./evidences.controller");
const mongoose_1 = require("@nestjs/mongoose");
const evidence_schema_1 = require("./schemas/evidence.schema");
const bets_module_1 = require("../bets/bets.module");
const users_module_1 = require("../users/users.module");
let EvidencesModule = class EvidencesModule {
};
exports.EvidencesModule = EvidencesModule;
exports.EvidencesModule = EvidencesModule = __decorate([
    (0, common_1.Module)({
        controllers: [evidences_controller_1.EvidencesController],
        providers: [evidences_service_1.EvidencesService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: evidence_schema_1.Evidence.name, schema: evidence_schema_1.EvidenceSchema },
            ]),
            bets_module_1.BetsModule,
            users_module_1.UsersModule,
        ],
    })
], EvidencesModule);
//# sourceMappingURL=evidences.module.js.map