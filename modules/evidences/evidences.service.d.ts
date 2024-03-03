/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Evidence } from './schemas/evidence.schema';
import { Model } from 'mongoose';
import { BetsService } from '../bets/bets.service';
import { UsersService } from '../users/users.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
export declare class EvidencesService {
    private evidencesModel;
    private readonly betsService;
    private readonly usersService;
    constructor(evidencesModel: Model<Evidence>, betsService: BetsService, usersService: UsersService);
    getEvidencesByIdBet(id_bet: string): Promise<Evidence[]>;
    getEvidencesByIdBetAndIdUser(id_bet: string, id_user: string): Promise<Evidence[]>;
    createEvidence(createEvidenceDto: CreateEvidenceDto): Promise<Evidence>;
}
