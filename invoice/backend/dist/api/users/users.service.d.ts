import { Model } from 'mongoose';
import { SolutionDoc } from 'common/mongo';
export declare class UsersService {
    private readonly solutionModel;
    constructor(solutionModel: Model<SolutionDoc>);
    getUsersSolutions(id: string): Promise<{
        __v?: number;
        id: any;
        createdAt: number;
        updatedAt: number;
        challenge: string;
        author: string;
        repoURL: string;
        liveURL: string;
        submittedAt: number;
        like: number;
        dislike: number;
        stacks?: string[];
        views: number;
    }[]>;
}
