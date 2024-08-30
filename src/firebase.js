import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


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
const auth = getAuth(app);

export { auth };