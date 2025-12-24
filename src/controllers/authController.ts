import { Request, RequestHandler, Response } from "express";
import { signinSchema } from "../schemas/auth";
import { createUser } from "../services/user";

export const signin: RequestHandler = async (req: Request, res: Response) => {
    const safeData = signinSchema.safeParse(req.body);
    if(!safeData.success){
        return res.json({ error: safeData.error.flatten().fieldErrors });
    };

    const newUser = createUser(safeData.data);
    
    return res.status(201).json({user: newUser});
};

export const signup: RequestHandler = async (req: Request, res: Response) => {
    return res.status(201).json({user: req.body});
};