import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import firebase from "firebase/app";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8Q04ciF23P5ToIoqKYx0wewspWxoZJQg",
  authDomain: "smashstore-14c4e.firebaseapp.com",
  projectId: "smashstore-14c4e",
  databaseURL:"https://console.firebase.google.com/project/smashstore-14c4e/database/smashstore-14c4e-default-rtdb/data/~2F ",
  storageBucket: "smashstore-14c4e.appspot.com",
  messagingSenderId: "1068893790346",
  appId: "1:1068893790346:web:32aa330569c4a83ca50d73"
}

const app = firebase.initializeApp(config);
export const auth = app.auth();