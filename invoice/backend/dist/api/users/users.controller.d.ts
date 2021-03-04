import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
