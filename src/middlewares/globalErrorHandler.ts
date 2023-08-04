import { ZodError } from "zod";
import CustomError from "../errors/CustomError";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError)
    return res.status(err.errorCode).json({ errors: err.serializer() });
  if (err instanceof ZodError)
    return res.status(400).json(
      err.issues.map((issue) => ({
        message: issue.message,
      }))
    );
  res.send("some error occurred!");
};
