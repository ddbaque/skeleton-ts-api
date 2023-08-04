import type { Request, Response, NextFunction } from "express";
import { createUser } from "../services/user.service";
import ValidationError from "../errors/ValidationError";
import {
  CreateUserType,
  UpdateUserBodyType,
  UpdateUserParamsType,
} from "schemas/user.schema";

const handleCreateUser = async (
  req: Request<unknown, unknown, CreateUserType>,
  res: Response
) => {
  const data = req.body;
  await createUser(data);
};

const handleUpdateUserById = async (
  req: Request<UpdateUserParamsType, unknown, UpdateUserBodyType>,
  res: Response
) => {
  const id = +req.params.id;
  const data = req.body;

  await updateUserById(id, data);
};

export { handleCreateUser };
