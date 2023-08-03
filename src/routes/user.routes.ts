import { Router } from "express";
import { handleCreateUser } from "../controllers/user.controllers";

const router = Router();

router.use("/", handleCreateUser)

export default router;
