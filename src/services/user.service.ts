import { User } from "@prisma/client";
import prisma from "../db";
import { CreateUserType, UpdateUserBodyType } from "../schemas/user.schema";
import ValidationError from "../errors/ValidationError";
const createUser = async (data: CreateUserType): Promise<User> => {
  return await prisma.user.create({ data });
};
const updateUserById = async (id: number, data: UpdateUserBodyType) => {
  const updateUser = await prisma.user.update({ where: { id }, data });
  if (!updateUser) {
    throw new ValidationError("no user found", 404, "id");
  }
  return updateUser;
};

export { createUser, updateUserById };

