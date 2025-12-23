import { Request, RequestHandler, Response } from "express";
import { signinSchema } from "../schemas/auth";

export const signin: RequestHandler = async (req: Request, res: Response) => {
    const data = signinSchema.safeParse(req.body);
    if(!data.success) {
        return res.json({ error: data.error.flatten().fieldErrors });
    };

    return res.status(201).json({user: req.body});
};

export const signup: RequestHandler = async (req: Request, res: Response) => {
    return res.status(201).json({user: req.body});
};