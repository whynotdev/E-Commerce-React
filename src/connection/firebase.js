import {auth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQcm53z1cA8SnniRY0mmzXAb6LnZUKp3g",
  authDomain: "e-commerce-bf962.firebaseapp.com",
  projectId: "e-commerce-bf962",
  storageBucket: "e-commerce-bf962.appspot.com",
  messagingSenderId: "879898817913",
  appId: "1:879898817913:web:7e90eb07948cf80c47aba8",
  measurementId: "G-VXNBDKSQMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {app,auth};