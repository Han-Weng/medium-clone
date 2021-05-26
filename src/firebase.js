import firebase from "firebase";

const firebaseConfig = {
  'Your credentials here (Firebase configs)'
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
