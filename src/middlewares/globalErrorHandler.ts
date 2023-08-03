import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  _err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
    res.send("some error occurred!")
};
