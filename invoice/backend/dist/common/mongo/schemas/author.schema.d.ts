import { Document } from 'mongoose';
export declare type AuthorDoc = Author & Document;
export declare class Author {
    name: string;
    username: string;
    avatar: string;
    github: string;
    proUser: boolean;
    createdAt: number;
    updatedAt: number;
    location: string;
}
export declare const AuthorSchema: import("mongoose").Schema<Document<Author>, import("mongoose").Model<Document<Author>>, undefined>;
