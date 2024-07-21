import express from 'express';
import { login, } from '../api/user/controller/user.controller.js';

export const userRouter = express.Router();

userRouter.post("/login",login);
