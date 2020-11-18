import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ92PExvjqpGEkd_xuJ4PucPCFrEqLQ-8",
  authDomain: "whatsapp-clone-14f61.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-14f61.firebaseio.com",
  projectId: "whatsapp-clone-14f61",
  storageBucket: "whatsapp-clone-14f61.appspot.com",
  messagingSenderId: "698650303376",
  appId: "1:698650303376:web:81ae4c1a683621d00db115",
  measurementId: "G-JMT8JF1FF1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
