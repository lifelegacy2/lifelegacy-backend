import { response } from "../../../utils/response/response.js";
import { status } from "../../../utils/response/response.status.js";
import { SaveDataService } from "../service/myprofile.service.js";

export async function SaveData(req, res) {
    const {data} = req.body;
    const uid = "jXTziIWx5yX2eKbVhKV4afID7Lf1" // 임시;
    try{
        if(!data){
            return res.send(response(status.MYPROFILE_DATA_NOT_FOUND));
        }
    
        console.log(data);
    
        const result = await SaveDataService(uid,data);
    
        if(!result){
            return res.send(response(status.MYPROFILE_SAVE_ERROR));
        }
    
        return res.send(response(status.SUCCESS));
    }catch(err){
        console.log(err);
        return res.send(response(status.INTERNAL_SERVER_ERROR));
    }
}   