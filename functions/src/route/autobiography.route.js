import express from 'express';
import { GetData, SaveData } from '../api/autobiography/controller/autobiography.controller.js';

export const autoBioGraphyRouter = express.Router();

autoBioGraphyRouter.get("/:uid",GetData);
autoBioGraphyRouter.post("/",SaveData);
