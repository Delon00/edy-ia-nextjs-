import {prismadb} from '@/lib/prismadb';

export const getUserByEmail = async (email:string) => {
    try {
        const user = await prismadb.user.findUnique({ where: { email } });
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getUserById = async (id:string) => {
    try {
        const user = await prismadb.user.findUnique({ where: { id } });
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
};
