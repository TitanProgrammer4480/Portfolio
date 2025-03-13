import express from "express";
import {  } from "../controllers/tech.controller.js";

const techRouter = express.Router();

techRouter.post("/", () => {console.log("tech");});

export default techRouter;