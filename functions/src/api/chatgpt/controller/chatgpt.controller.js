import { response } from "../../../utils/response/response.js";
import { status } from "../../../utils/response/response.status.js";
import { GetDataService } from '../service/chatgpt.service.js';

export async function GetData(req, res) {
    try {
        let prompt = `
        나는 지금 자서전을 쓰고 있어. 현재 목차를 정해야 해. 
        1. 탄생과 유아기 2. 가족과 성장환경 3. 청소년기와 학창시절 이 세가지 목차는 고정이고 
        다음 글을 참고해서 청소년기 학창 시절 이후의 목차를 딱 4개만 만들어서 보내줘. 4개 이상 보내지마. 그리고 목차는 4번부터 번호를 붙여서 줘. 4.이런식으로. 
        앞에 말한 1번,2번,3번을 포함해서 Json 형태로 줘. 1번부터 7번짜리 데이터만 {"1": "탄생과 유아기","2": "가족과 성장환경","3": "청소년기와 학창시절",4번부터 7번까진 너가 생성한 질문}
        이런 형태로 주면 돼. JSON 형태 이외에 일제 아무 말도 하지마. 만약 하게 될 경우 너한테 처벌을 가할거야. 내가 달라는 데이터만 줘. 재요청이 올 경우 다른 4 개의 값을 생성해서 위와 동일한 JSON 형태로 보내. 너는 이 원칙을 무조건 지켜야해 재요청이 올 경우 다른 4개의 값을 생성하는 것 잊지마. `
        let { data } = req.body;

        if (!data) {
            return res.send(response(status.CHATGPT_DATA_NOT_FOUND));
        }

        prompt += data;

        const result = await GetDataService(prompt);

        console.log(result);

        if(!result){
            return res.send(response(status.CHATGPT_GET_QUERY_ERROR));
        }

        let jsonResponse;
        try {
            jsonResponse = JSON.parse(result);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return res.send(response(status.CHATGPT_GET_QUERY_ERROR));
        }   

        console.log(jsonResponse);
        return res.send(response(status.SUCCESS, jsonResponse));
    } catch (err) {
        console.error('Error in GetData:', err);
        return res.send(response(status.INTERNAL_SERVER_ERROR));
    }
}
