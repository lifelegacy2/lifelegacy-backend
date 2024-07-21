import { response } from "../../../utils/response/response.js";
import { status } from "../../../utils/response/response.status.js";
import { SaveDataService, GetDataService } from "../service/notion.service.js";
import admin from 'firebase-admin';

export async function SaveData(req, res) {
    try{
        const sessionCookie = req.cookies.session || '';
        const userData =await admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */);

        const {uid} = userData;
        const {data,question,uploadedImageUrl} = req.body;

        if(!uid||!data){
            return res.send(response(status.NOTION_DATA_NOT_FOUND));
        }

        const reuslt = await SaveDataService(uid,data,question,uploadedImageUrl);
        
        if(!reuslt){
            return res.send(response(status.NOTION_SAVE_QUERY_ERROR));
        }
        
        return res.send(response(status.SUCCESS));

    }catch(err){
        console.log(err);
        return res.send(response(status.INTERNAL_SERVER_ERROR));
    }
}
export async function GetData(req, res) {
    try{
        const {userName} = req.body;

        if(!userName){
            return res.send(response(status.NOTION_DATA_NOT_FOUND));
        }
    
        const result = await GetDataService(userName);

        if(!result){
            return res.send(response(status.NOTION_GET_QUERY_ERROR));
        }

        return res.send(response(status.SUCCESS));

    }catch(err){
        console.log(err);
        return res.send(response(status.INTERNAL_SERVER_ERROR));
    }
}