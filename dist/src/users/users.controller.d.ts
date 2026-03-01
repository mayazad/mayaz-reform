import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(body: any): Promise<{
        email: string;
        name: string | null;
        id: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfile(id: string): Promise<{
        profile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            level: number;
            currentXp: number;
            streak: number;
            baseStats: import("@prisma/client/runtime/client").JsonValue | null;
            primaryClass: string | null;
            focusAreas: import("@prisma/client/runtime/client").JsonValue | null;
            dietPref: string | null;
            waterGlasses: number;
            waterGoal: number;
            sleepHours: number;
            userId: string;
        } | null;
    } & {
        email: string;
        name: string | null;
        id: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
