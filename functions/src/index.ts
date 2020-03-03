import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manimani-site.firebaseio.com"
});

const store = admin.firestore();

export const users = functions.https.onRequest((request, response) => {
  const docRef = store.collection("users").doc("admin_user");
  docRef.get().then(function(doc) {
    if (doc.exists) {
      response.send(doc.data());
    } else {
      response.send("null");
    }
  });
});
