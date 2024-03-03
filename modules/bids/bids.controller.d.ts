import { BidsService } from './bids.service';
import { Bid } from './schemas/bid.schema';
import { CreateBidDto } from './dto/create-bid.dto';
import { CalculateBidDto } from './dto/calculation-bid.dto';
export declare class BidsController {
    private readonly bidsService;
    constructor(bidsService: BidsService);
    getAllBids(): Promise<Bid[]>;
    calculationBid(calculateBidDto: CalculateBidDto): Promise<boolean>;
    createBid(createBidDto: CreateBidDto, id_bet: string): Promise<Bid>;
}
