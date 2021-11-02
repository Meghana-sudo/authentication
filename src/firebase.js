import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";





var firebaseConfig = {

    apiKey: "AIzaSyCqvR5CoMFa_KW7E7Ggw-CAUAe9AeAlTZ0",
  
    authDomain: "react-firebase-ab8e6.firebaseapp.com",
  
    projectId: "react-firebase-ab8e6",
  
    storageBucket: "react-firebase-ab8e6.appspot.com",
  
    messagingSenderId: "108530097590",
  
    appId: "1:108530097590:web:5fcabcb4e73026756b7517"
  
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);

  const db = firebaseDB.database().ref();
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  
  export { auth, googleAuthProvider, facebookAuthProvider, db };