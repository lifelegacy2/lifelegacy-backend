import { StatusCodes } from "http-status-codes";

export const status = {
    // success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": "200", "message": "success!"},    
    
    // error
    // common err
    BAD_REQUEST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "잘못된 요청입니다." },
    UNAUTHORIZED: {status: StatusCodes.UNAUTHORIZED, "isSuccess": false, "code": "401", "message": "권한이 잘못되었습니다." },
    FORBIDDEN: {status: StatusCodes.FORBIDDEN, "isSuccess": false, "code": "403", "message": "금지된 요청입니다." },
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "500", "message": "서버 에러, 관리자에게 문의 바랍니다." },
	
    // notion err
    NOTION_DATA_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "노션: Data가 없습니다."},
    NOTION_SAVE_QUERY_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "노션: 데이터 생성 쿼리에 오류가 발생했습니다."},
    NOTION_GET_QUERY_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "노션: 데이터 불러오기 쿼리에 오류가 발생했습니다."},

    // chatGPT err
    CHATGPT_DATA_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "chat gpt: Data가 없습니다."},
    CHATGPT_GET_QUERY_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "chat gpt: 데이터 불러오기 쿼리에 오류가 발생했습니다."},

    // autobiography err
    AUTOBIOGRAPHY_DATA_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "자서전: Data가 없습니다."},
    AUTOBIOGRAPHY_SAVE_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "자서전: 데이터를 저장하던 중 오류가 발생했습니다."},
    AUTOBIOGRAPHY_GET_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "자서전: 데이터 불러오던 중 오류가 발생했습니다."},

    // user err

    // myprofile err
    MYPROFILE_DATA_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "내 프로필 : Data가 없습니다."},
    MYPROFILE_SAVE_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "내 프로필 : 데이터를 저장하던 중 오류가 발생했습니다."},
    MYPROFILE_GET_ERROR: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "400", "message": "내 프로필 : 데이터 불러오던 중 오류가 발생했습니다."},
    
}