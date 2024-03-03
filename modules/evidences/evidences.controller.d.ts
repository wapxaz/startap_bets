import { EvidencesService } from './evidences.service';
import { Evidence } from './schemas/evidence.schema';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
export declare class EvidencesController {
    private readonly evidencesService;
    constructor(evidencesService: EvidencesService);
    getEvidencesByIdBet(id_bet: string): Promise<Evidence[]>;
    getEvidencesByIdBetAndIdUser(id_bet: string, id_user: string): Promise<Evidence[]>;
    createUser(createEvidenceDto: CreateEvidenceDto): Promise<Evidence>;
}
