import { db } from "../../../../config/firebase.confing.js";

export async function SaveDataService(uid, data, qusetion ,questionId,uploadedImageUrl) {
    try {
        await db.collection("Answer").doc(uid).collection("QuestionId").doc(questionId).set({
            answer: data,
            qusetion: qusetion,
            imgUrl: uploadedImageUrl,
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export async function GetDataService(uid){
    try {
        const data =  await db.collection('Answer').doc(uid).collection('QuestionId').get();
        const answers = {};
        data.forEach(doc => {
            answers[doc.id] = { ...doc.data() };
        });
        return answers;
    } catch (error) {
        console.error('Error getting answers: ', error);
        return false;
    }
}
