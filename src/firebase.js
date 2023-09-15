import "firebase/compat/auth";
import "firebase/compat/firestore";

import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsZSHjn2qHYh4yRtU9LXgi2bXcuFDNFy8",
  authDomain: "dineshdj-a7d9d.firebaseapp.com",
  databaseURL: "https://dineshdj-a7d9d-default-rtdb.firebaseio.com",
  projectId: "dineshdj-a7d9d",
  storageBucket: "dineshdj-a7d9d.appspot.com",
  messagingSenderId: "603936067516",
  appId: "1:603936067516:web:537031818b55d0461fa5b9",
  measurementId: "G-1874ENW03X",
};
const app = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope("email");
export const auth = app.auth();
// eslint-disable-next-line import/no-anonymous-default-export
// export default {app,googleProvider};
export { app, googleProvider, facebookProvider };
