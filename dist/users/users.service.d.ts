import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: any): Promise<{
        email: string;
        name: string | null;
        id: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserProfile(userId: string): Promise<{
        profile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            level: number;
            currentXp: number;
            streak: number;
            baseStats: import("@prisma/client/runtime/library").JsonValue | null;
            primaryClass: string | null;
            focusAreas: import("@prisma/client/runtime/library").JsonValue | null;
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
