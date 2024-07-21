import admin from 'firebase-admin';

const firebaseConfig = {
  type: "service_account",
  project_id: "autobiography-16bed",
  private_key_id: "33f24417ec66504c375ee94ae4b1097e9c1e5b01",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzBPQjvMGeeV8v\nUFAXyV/PLZICQ0GltRFP0Gs4YqzC2zwDURak95Vxu5x1qXlw90Pz4oC8JzOh08hP\n7gaKwl3kebmN51e4DyGhcXqY9JzXincP4pGxK0iet7ROOwPtmeYmuDTNCYLu4nqE\nNFVYWM8CWqAJju1dkNfELUBt3gxmO4INWGM/DrJPG9BKthiOeiGfwvR03ldsNFER\n0nAzZGZ2+KK3Sl/Nh3r2REhch4L766kjsiGwMlGUK3vDXy6PNEVs5WyrT+34rq8z\nFj+XO7+Ji7ojLfx0ph57GD0tQxyzMsawwnCM+J6QRH9WmMtnJOB7u6NVriOqkcL8\nXfEQvCQTAgMBAAECggEAMs2glTW/gsAx9YTmveFdibeGfJLmoeaRO6PLkcxa989s\nqApOkVFbvVN/Mtr+BkN9qswoOX0sh2vJKHnFrII9UBYFRRKWj7rnkd/Y6WhdzENU\nx5LGQs+kQ7qhdiQEWNz4dhuHjHp7CF0IZNVPNQu675GVYjEIBqoQuXEYHDXMMgSN\np26eWo2F1vsoWfxJS6CW0qe8AghdIHhNq/Ect7usSHPBZMl7j5SfB5VVxKrUweWA\ntccfVfOqyBIKgDhhp5X+HJYbt1Zz+9KGuf8c8wXxFupLcHkTKCnI3aUDARxUvJcT\n6a8F6X7RGACSmxYC0k7rGHLgCt2bgB5e+2oEeDyqYQKBgQD07UzhCAy6xUKH4eY9\ngcLukm7gRYmEMvqrnYWKkyvUyRuZxtxSbV3GSCl5Rrx10HgeqhD8zrW9HL+wDkpa\nD3+mOUqK/yONwn9MD0CxUorNhi444MQA69tpEN3gy+UvM5HZ+v9Z4jwsvhLecfiF\nOXkVO2dnjtXzT7thKs35wYnJcwKBgQC7HNyRTisRwof94Rkz/ZG/K/z5el0aLp0Z\noW/z/cXzkGSapm7xMRz42KHVlr64LWjBQtQF7iEcfcvn3bPB3nVtFXGgAKvtcGUv\ncmeLFjr+0O78BZMRZWPk2TvfdyGEaEQOIHHx+GuK0CeH3CxLmOTEScrl12FqmnH3\n47tI4agS4QKBgQDlJBE1wrMuFRhuSfB+gKTfUA39MfE6xfrwjZl/ELsEAvYYgwxi\n7UC7HY33kS8FxfhrL85exgEPIRNQ4b27zh4tZBISQiqAGIPBo89xVfjX2P3rZpTZ\nC8+k1wvNoNQUudltJr6418hWT6kVhWjtMtzN+Vp/bwlI7cIvYL19OQzwcwKBgAml\ntE2dnSTeRcq2N2lx0njr2LA4OeKmspzmsPIAjJtBP56lpCS1ZowCB14O1qiCVttY\nCbyAiZ6Bcejzilgdkypbp68bOcIVQHJQ0LvgGoyW0yuVUf7cnmjnNmoQJ18/TPr5\ne0aBi3Htx4v+sx32tRzVvStajoBDlEq2qCpa0CKhAoGBALhEHa4MCFcV8VwvJ9V6\nxU1UNev6ceJFHOrlOXGS4i/DP403crtTwPR4tSJmV0vfZma9k6VBMxpQ6YlokD6i\nFz9iwDAF9bg9T4VHF7LbuPozsOtjGv2pAYIvUuz21NZ+ejP8ou2cnD9UXgkjXahX\nqto9FQLjInsfl+uwjTaNcsKP\n-----END PRIVATE KEY-----\n",
  clientEmail: "firebase-adminsdk-6c6om@autobiography-16bed.iam.gserviceaccount.com",
  clientId: "104690028201400236949",
  authUri: "https://accounts.google.com/o/oauth2/auth",
  tokenUri: "https://oauth2.googleapis.com/token",
  authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
  clientC509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6c6om%40autobiography-16bed.iam.gserviceaccount.com",
  universeDomain: "googleapis.com"
};



export const initApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://autobiography-16bed.firebaseio.com",
});


export const db = admin.firestore();
export const auth = admin.auth();

