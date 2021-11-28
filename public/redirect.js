import "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js";

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
export const app = window.firebase.initializeApp(firebaseConfig);
export const database = window.firebase.firestore();

async function getDestinationUrl(initialUrl) {
  const docRef = await database.collection("urls").doc(initialUrl);
  const doc = await docRef.get();

  if (doc.exists) {
    return doc.get("long");
  } else {
    console.error(`The URL ${initialUrl} doesn't exist in the database.`);
  }
}

async function redirect() {
  const initialUrl = window.location.pathname.replace(/\/+/, "");
  const destination = await getDestinationUrl(initialUrl);
  window.location.replace(destination);
}

redirect();
