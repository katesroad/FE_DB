import { SolutionsService } from './solutions.service';
export declare class SolutionsController {
    private readonly solutionsService;
    constructor(solutionsService: SolutionsService);
    rateSolution(id: string, rate: any): Promise<any>;
}
