import { Router } from "express";
import {signup,signin,signout,refresh} from "../controller/auth.controller.js";
import { getDetails } from "../controller/authgoogle.controller.js";

const authRouter = Router();
authRouter.post("/sign-up",signup);
authRouter.post("/sign-in", signin);
authRouter.post("/sign-out",signout);
authRouter.post("/sign-upG",getDetails);
authRouter.post("/refresh",refresh)

export default authRouter
