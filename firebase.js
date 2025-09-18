//firebase.js
import admin from "firebase-admin";
import { createRequire } from "module"; 
const require = createRequire(import.meta.url);
const serviceAccount=require("./serviceAccountKey.json");
//let serviceAccount;
//try{
//   serviceAccount=require(serviceAccountPath);
//}catch(err){
//   console.error(
//     `\nERROR:Could not load Firebase service account.\nMake sure ${serviceAccountPath} exists.\n`+
//      'If you are using env var GOOGLE_APPLICATION_CREDENTIALS,set it to the JSON path.\n'
//   );
//}
if (!admin.apps.length){
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
});
}
const db=admin.firestore();
export { db, admin};