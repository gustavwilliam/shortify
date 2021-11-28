import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAl6-CNyo4spsd8k0E2iYgofuyX7NIzTvo",
  authDomain: "gh-pages-shortener.firebaseapp.com",
  projectId: "gh-pages-shortener",
  storageBucket: "gh-pages-shortener.appspot.com",
  messagingSenderId: "88826268703",
  appId: "1:88826268703:web:ac01574075ad3e0ace992a",
  measurementId: "G-501CJN4M28",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
getAnalytics(app);
