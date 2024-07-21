import express from 'express';
import { GetData } from '../api/chatgpt/controller/chatgpt.controller.js';

export const chatGptRouter = express.Router();

chatGptRouter.post("/", GetData);
