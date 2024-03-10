const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
    return new PrismaClient();
};

globalThis.prisma = globalThis.prisma ?? prismaClientSingleton();

module.exports = globalThis.prisma;

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
}