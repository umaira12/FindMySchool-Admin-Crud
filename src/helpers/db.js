import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCDKYhCMcYt-GwF_ZPOJM7ceStuEfGtleY",
    authDomain: "findmyschool1999.firebaseapp.com",
    // databaseURL: "",
    projectId: "findmyschool1999",
    storageBucket: "findmyschool1999.appspot.com",
    messagingSenderId: "968334332726",
    appId: "1:968334332726:web:08d07eca2dd0b9ac5f5997"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;