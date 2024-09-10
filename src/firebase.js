import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ecommerce-admin-735a2.firebaseapp.com",
  projectId: "ecommerce-admin-735a2",
  storageBucket: "ecommerce-admin-735a2.appspot.com",
  messagingSenderId: "1066114112147",
  appId: "1:1066114112147:web:b5daccd412b5f68814cb66",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
