// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC85XBz9RJegwHH5nnpzhHcZqq8EsdAXjo",
  authDomain: "training-app-project-69.firebaseapp.com",
  projectId: "training-app-project-69",
  storageBucket: "training-app-project-69.appspot.com",
  messagingSenderId: "358275119460",
  appId: "1:358275119460:web:e58b50e4f19f7fff846271",
  measurementId: "G-8EH3XXCT63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };