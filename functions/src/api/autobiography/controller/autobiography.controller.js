import { response } from "../../../utils/response/response.js";
import { status } from "../../../utils/response/response.status.js";
import { GetDataService, SaveDataService } from "../service/autobiography.service.js";
import admin from 'firebase-admin';

export async function SaveData(req,res){
    try{
        const sessionCookie = req.cookies.session || '';
        const userData =await admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */);

        const {uid} = userData;

        const {data,question,questionId,uploadedImageUrl} = req.body;

        if(!data || !uid || !questionId){
            return res.send(response(status.AUTOBIOGRAPHY_DATA_NOT_FOUND));
        }
        const result = await SaveDataService(uid,data,question,questionId,uploadedImageUrl);
        
        if(!result){
            return res.send(response(status.AUTOBIOGRAPHY_SAVE_ERROR));
        }

        return res.send(response(status.SUCCESS));

    }catch(err){
        console.log(err);
        return res.send(response(status.INTERNAL_SERVER_ERROR));
    }
}

export async function GetData(req,res){
    try{
        // const sessionCookie = req.cookies.session || '';
        // const userData =await admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */);
        // const result = await GetDataService(userData.uid);
        // console.log(userData);

        // 삭제 예정 
        const {uid} = req.params

        if(!uid ){
            return res.send(response(status.AUTOBIOGRAPHY_DATA_NOT_FOUND));
        }
        // 

        const result = await GetDataService(uid);

        return res.send(response(status.SUCCESS,result));
        
    }catch(err){
        console.log(err);
        return res.send(response(status.INTERNAL_SERVER_ERROR));
    }
}