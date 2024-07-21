import { auth } from "../../../../config/firebase.confing.js";
import { response } from "../../../utils/response/response.js";
import { status } from "../../../utils/response/response.status.js";

export const login = async (req, res) => {
  try {
    const idToken = req.body.idToken.toString();

    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    const options = { maxAge: expiresIn, httpOnly: true ,secure: true};

    res.cookie('session', sessionCookie, options);

    return res.send(response(status.SUCCESS));
    
  } catch (err) {
    console.error('Error verifying token:', err);

    return res.send(response(status.INTERNAL_SERVER_ERROR));
  }
};