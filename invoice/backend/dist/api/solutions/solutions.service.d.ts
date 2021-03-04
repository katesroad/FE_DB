import { Model } from 'mongoose';
import { SolutionDoc } from 'common/mongo/schemas';
export declare class SolutionsService {
    private readonly solutionModel;
    constructor(solutionModel: Model<SolutionDoc>);
    rateSolution(id: string, rate: any): Promise<any>;
}
