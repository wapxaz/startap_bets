import { BetsService } from './bets.service';
import { Bet } from './schemas/bet.schema';
import { CreateBetDto } from './dto/create-bet.dto';
export declare class BetsController {
    private readonly betsService;
    constructor(betsService: BetsService);
    getAllBets(): Promise<Bet[]>;
    getByIdBet(id: string): Promise<Bet>;
    getBidsByIdUser(id_user: string): Promise<Bet[]>;
    getBetsByIdCategory(id_category: string): Promise<Bet[]>;
    createBet(createBetDto: CreateBetDto): Promise<Bet>;
}
