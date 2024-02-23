import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQcm53z1cA8SnniRY0mmzXAb6LnZUKp3g",
  authDomain: "e-commerce-bf962.firebaseapp.com",
  projectId: "e-commerce-bf962",
  storageBucket: "e-commerce-bf962.appspot.com",
  messagingSenderId: "879898817913",
  appId: "1:879898817913:web:7e90eb07948cf80c47aba8",
  measurementId: "G-VXNBDKSQMX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };
