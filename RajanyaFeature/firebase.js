import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("./monasterytour-5b277-firebase-adminsdk-fbsvc-58f40fa24e.json", "utf-8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://monasterytour-5b277-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

export { db, admin };
