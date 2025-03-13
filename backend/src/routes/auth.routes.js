import express from "express";
import { check, login, logout } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/check", check);

export default authRouter;