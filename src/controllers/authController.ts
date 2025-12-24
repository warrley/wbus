import { Request, RequestHandler, Response } from "express";

export const signin: RequestHandler = async (req: Request, res: Response) => {
    return res.status(201).json({user: req.body});
};

export const signup: RequestHandler = async (req: Request, res: Response) => {
    return res.status(201).json({user: req.body});
};