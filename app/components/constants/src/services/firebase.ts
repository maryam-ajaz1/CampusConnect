import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpZgh4cz9GBW5aXUxPt8pJlQkf5O35Y0",
  authDomain: "campusconnect-85d28.firebaseapp.com",
  projectId: "campusconnect-85d28",
  storageBucket: "campusconnect-85d28.appspot.com",
  messagingSenderId: "884096635247",
  appId: "1:884096635247:web:9666b4ea170f3c4014989a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


