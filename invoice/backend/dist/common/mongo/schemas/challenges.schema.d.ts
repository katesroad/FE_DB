import { Document } from 'mongoose';
export declare type ChallengeDoc = Challenge & Document;
export declare class Challenge {
    type: string;
    solutions: number;
    languages: string[];
    title: string;
    description: string;
    difficulty: number;
    slug: string;
    createdAt: number;
    updatedAt: number;
    crawledAt: string;
    heroImg: string;
}
export declare const ChallengeSchema: import("mongoose").Schema<Document<Challenge>, import("mongoose").Model<Document<Challenge>>, undefined>;
