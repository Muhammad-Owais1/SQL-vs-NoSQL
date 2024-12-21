import { Router } from "express";
import signupController from "./controller/signup.js";

const router = Router();

router.post("/signup", signupController);

export default router;
