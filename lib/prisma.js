import { PrismaClient } from '@prisma/client';

// const prismaClientSingleton = () => {
//     return new PrismaClient();
// };

// export const prisma = globalThis.prisma ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

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
