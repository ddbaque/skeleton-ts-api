import { User } from "@prisma/client";
import prisma from "../db";

const createUser = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export { createUser };
