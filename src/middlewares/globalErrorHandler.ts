import { ZodError } from "zod";
import CustomError from "../errors/CustomError";
import { Request, Response, NextFunction } from "express";

import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("entor error");
  if (err instanceof CustomError)
    return res.status(err.errorCode).json({ errors: err.serializer() });
  if (err instanceof ZodError)
    return res.status(400).json(
      err.issues.map((issue) => ({
        message: issue.message,
      }))
    );
  console.log(err);
  if (err instanceof PrismaClientKnownRequestError) {
    return res.status(404).json({ errors: err.meta?.cause });
  }
  res.send("some error occurred!");
};
