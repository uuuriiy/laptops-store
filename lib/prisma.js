import { PrismaClient } from '@prisma/client';
// import { withAccelerate } from '@prisma/extension-accelerate';

let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export { prisma };
