import { db } from "../../../../config/firebase.confing.js";

export async function SaveDataService(uid,data) {
    try {
        await db.collection("대질문").doc(uid).set({
            data
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}