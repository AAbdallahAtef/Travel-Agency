import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCXDk-4ff8ogYP-hiktMpvKKMDJH8ZGpJ4",
  authDomain: "travel-agency-88679.firebaseapp.com",
  projectId: "travel-agency-88679",
  storageBucket: "travel-agency-88679.appspot.com",
  messagingSenderId: "1069160737020",
  appId: "1:1069160737020:web:e12a24be7b835bd6fa0f79",
  measurementId: "G-CV1QBTBV1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};