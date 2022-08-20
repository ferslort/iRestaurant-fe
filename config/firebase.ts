// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9Ji1mDtiwsmfsH3Wrf5Ks--BFpg4Q0L8',
  authDomain: 'irestaurant-359100.firebaseapp.com',
  projectId: 'irestaurant-359100',
  storageBucket: 'irestaurant-359100.appspot.com',
  messagingSenderId: '983293757738',
  appId: '1:983293757738:web:b51e695687f3741bd6b653'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
