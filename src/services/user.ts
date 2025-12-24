import z from "zod";
import { prisma } from "../libs/prisma";
import bcrypt from "bcryptjs";
import { signinSchema } from "../schemas/auth";

export const createUser = async (user: z.infer<typeof signinSchema>) => {
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;

    console.log(user)
    
    const newUser = await prisma.user.create({
        data: {
            username: user.username,
            email: user.email,
            age: user.age,
            password: user.password,
            money: 0,
        }
    });
    console.log(user)
    
    return newUser;
};