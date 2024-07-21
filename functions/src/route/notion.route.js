import express from 'express';
import { SaveData, GetData } from '../api/notion/controller/notion.controller.js';

export const notionRouter = express.Router();

notionRouter.get("/",GetData);
notionRouter.post("/",SaveData);
