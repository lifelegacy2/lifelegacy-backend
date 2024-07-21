import express from 'express';
import { SaveData } from '../api/myprofile/controller/myprofile.controller.js';

export const myprofileRouter = express.Router();

myprofileRouter.post("/save",SaveData);
