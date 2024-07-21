import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// 사용자 정의 모듈 불러오기 
import { initApp } from './config/firebase.confing.js'
import { chatGptRouter } from './src/route/chatgpt.route.js';
import { notionRouter } from './src/route/notion.route.js';
import { autoBioGraphyRouter } from './src/route/autobiography.route.js';
import { myprofileRouter } from './src/route/myprofile.route.js';

const app = express();

const corsOptions = {
  origin: ['https://lifelegacy.co.kr','https://autobiography-16bed.firebaseapp.com','https://autobiography-16bed.web.app','http://127.0.0.1:5002'], // 배포된 클라이언트 도메인
  // origin: 'https://lifelegacy.co.kr', // 배포시 이렇게 
  credentials: true, // 쿠키를 포함한 요청을 허용
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(cookieParser());
app.use(express.json()); // JSON 요청을 처리할 수 있도록 설정
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청을 처리할 수 있도록 설정

app.use("/myprofile",myprofileRouter);
app.use("/autoBioGraphy", autoBioGraphyRouter);
app.use("/chatGpt", chatGptRouter);
app.use("/notion", notionRouter);

export const api = functions.region("asia-northeast3").https.onRequest(app);
