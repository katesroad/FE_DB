import { Model } from 'mongoose';
import { ChallengeDoc, SolutionDoc } from 'common/mongo';
import { SolutionsQueryDto } from './dto/solutions-query.dto';
export declare class ChallengesService {
    private readonly challengeModel;
    private readonly solutionModel;
    constructor(challengeModel: Model<ChallengeDoc>, solutionModel: Model<SolutionDoc>);
    getAllChallenges(): Promise<any[]>;
    getChallengeByFemId(id: string): Promise<any>;
    getChallengesSolutions(id: string, queryDto: SolutionsQueryDto): Promise<any[]>;
    private cleanDocs;
}
