import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import {auth} from firebase.js;
import firebase from "/firebase/app";


function onfacebookSignin(){

  //SigninwithProvider(new firebase.auth.FacebookAuthProvider());
};
function  onGooleSignin (){
 // SigninwithProvider(new firebase.auth.GoogleAuthProvider());
};

function ondemClick(){
  console.log("working fine");
  setTimeout(function() { alert("my message"); }, 5000);
}
document.getElementById("google").addEventListener("click" , onGooleSignin , true);
document.getElementById("demo").addEventListener("click" ,ondemClick , true);
//     const SigninwithProvider = async provider => {
//       try {
//         const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
//         // returns an object
//         if (additionalUserInfo.isNewUser) {
//           await database.ref(`/profiles/${user.uid}`).set({
//             name: user.displayName,
//             createdAt: firebase.database.ServerValue.TIMESTAMP,
//           }); //  database .ref takes path under which we want to store the info .set is usede to write into database and it takes object because its a json based database and also this write property return a promise so we have to await it
//         }
//         Alert.success('Signed in Successfully!', 4000);
//       } catch (err) {
//         Alert.info(err.message, 4000);
//  }
  
// }

