import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDN5AeCYbAjzbBgl-_d4Z2bwKLoJg6a0YU",
    authDomain: "cleanit-9f2cd.firebaseapp.com",
    projectId: "cleanit-9f2cd",
    storageBucket: "cleanit-9f2cd.appspot.com",
    messagingSenderId: "495812818211",
    appId: "1:495812818211:web:abce29209bfa0d698bc896",
    measurementId: "G-N078Y7CE7D"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const firestore = firebase.firestore()

  export {auth, firestore}
