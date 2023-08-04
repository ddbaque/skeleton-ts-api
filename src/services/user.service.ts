import { User } from "@prisma/client";
import prisma from "../db";
import { CreateUserType, UpdateUserBodyType } from "../schemas/user.schema";
import ValidationError from "../errors/ValidationError";

class UserService {
  //* Get all users of database
  async getAllUsers(): Promise<Array<User>> {
    return await prisma.user.findMany();
  }

  //* Get a user by Id of database
  async getUserById(id: number) {
    const foundUser = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!foundUser) {
      console.log("no user getUserById");
      throw new ValidationError("no user found", 404, "id");
    } else return foundUser;
  }

  //* Create a user of database
  async createUser(data: CreateUserType): Promise<User> {
    return await prisma.user.create({ data });
  }

  //* Update a user by Id of database
  async updateUserById(id: number, data: UpdateUserBodyType): Promise<User> {
    const updateUser = await prisma.user.update({ where: { id }, data });
    if (!updateUser) {
      throw new ValidationError("no user found", 404, "id");
    }
    return updateUser;
  }

  //* Delete a user by Id of database
  async deleteUserById(id: number): Promise<User> {
    const deletedUser = await prisma.user.delete({ where: { id } });
    console.log(deletedUser, "holaaaa");
    if (!deletedUser) {
      console.log("entor service deletre");
      throw new ValidationError("no user deleted", 404, "id");
    }
    return deletedUser;
  }
}

export default new UserService();
