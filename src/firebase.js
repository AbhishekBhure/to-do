// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA49is5W3Bzlj46EuUO3k7uFadwXUOeedU",
  authDomain: "todo-be783.firebaseapp.com",
  projectId: "todo-be783",
  storageBucket: "todo-be783.appspot.com",
  messagingSenderId: "30094443217",
  appId: "1:30094443217:web:a91e769595077b37163bf0",
  measurementId: "G-674QNZPSS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, analytics, auth };
