import { Document } from 'mongoose';
export declare type SolutionDoc = Solution & Document;
export declare class Solution {
    challenge: string;
    author: string;
    repoURL: string;
    liveURL: string;
    submittedAt: number;
    createdAt: number;
    updatedAt: number;
    like: number;
    dislike: number;
    stacks?: string[];
    views: number;
}
export declare const SolutionSchema: import("mongoose").Schema<Document<Solution>, import("mongoose").Model<Document<Solution>>, undefined>;
