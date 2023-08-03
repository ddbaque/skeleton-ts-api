import type { Request, Response, NextFunction } from "express";
import { createUser } from "../services/user.service";

const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await createUser();
  console.log(users);
  if (users.length === 0) {
    const err = new Error("no users");
    next(err);
  } else res.json(users);
};

export { handleCreateUser };
