import type { Request, Response } from "express";
import UserService from "../services/user.service";
import {
  CreateUserType,
  UpdateUserBodyType,
  UpdateUserParamsType,
  GetUserParamsType,
} from "schemas/user.schema";

class UserController {
  async getAllUsers(
    _req: Request<unknown, unknown, CreateUserType>,
    res: Response
  ) {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  }

  async getUserById(req: Request<GetUserParamsType>, res: Response) {
    const id = +req.params.id;
    const user = await UserService.getUserById(id);
    res.status(200).json(user);
  }

  async createUser(
    req: Request<unknown, unknown, CreateUserType>,
    res: Response
  ) {
    const data = req.body;
    await UserService.createUser(data);

    res.status(201).json({ message: "new user created!" });
  }

  async updateUserById(
    req: Request<UpdateUserParamsType, unknown, UpdateUserBodyType>,
    res: Response
  ) {
    const id = +req.params.id;
    const data = req.body;

    const updatedUser = await UserService.updateUserById(id, data);

    res.status(201).json(updatedUser);
  }

  async deleteUserById(req: Request, res: Response) {
    const id = +req.params.id;

    const deletedUser = await UserService.deleteUserById(id);
    console.log(deletedUser);
    res.status(204).json(deletedUser);
  }
}

export default new UserController();
