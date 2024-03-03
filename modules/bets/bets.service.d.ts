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
import { Model } from 'mongoose';
import { Bet } from './schemas/bet.schema';
import { CreateBetDto } from './dto/create-bet.dto';
import { UsersService } from 'src/modules/users/users.service';
import { CategoriesService } from 'src/modules/categories/categories.service';
export declare class BetsService {
    private betsModel;
    private readonly usersService;
    private readonly categoriesService;
    constructor(betsModel: Model<Bet>, usersService: UsersService, categoriesService: CategoriesService);
    getAllBets(): Promise<Bet[]>;
    getByIdBet(id: string): Promise<Bet>;
    createBet(betDto: CreateBetDto): Promise<Bet>;
    updateStatusByIdBet(id: string, status: boolean): Promise<Bet>;
    getBidsByIdUser(id_user: string): Promise<Bet[]>;
    getBetsByIdCategory(id_category: string): Promise<Bet[]>;
    checkBetById(id: string): Promise<boolean>;
    checkBetAndUserById(id_bet: string, id_user: string): Promise<boolean>;
}
