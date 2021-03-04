import { ChallengesService } from './challenges.service';
import { SolutionsQueryDto } from './dto/solutions-query.dto';
export declare class ChallengesController {
    private readonly challengesService;
    constructor(challengesService: ChallengesService);
    getAllChallenges(): Promise<any[]>;
    getChallengeByFemId(id: string): Promise<any>;
    getChallengesSolutions(id: string, queryDto: SolutionsQueryDto): Promise<any[]>;
}
