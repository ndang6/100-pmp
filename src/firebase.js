import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBjsjHldiPRkcODR65qIVfH0zCxlCF0gKA",
    authDomain: "code-workout.firebaseapp.com",
    databaseURL: "https://code-workout.firebaseio.com",
    projectId: "code-workout",
    storageBucket: "code-workout.appspot.com",
    messagingSenderId: "844204707027",
    appId: "1:844204707027:web:0f81f189b0e6d5fbead826",
    measurementId: "G-YMDDNDN919"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export { projectAuth, projectFirestore }
  // export { projectAuth, projectStorage, projectFirestore }
