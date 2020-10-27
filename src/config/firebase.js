import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCqmGyQPAnpz3mlmFfO-IXPXfjmBHnJgXU",
    authDomain: "todoapp-ffdda.firebaseapp.com",
    databaseURL: "https://todoapp-ffdda.firebaseio.com",
    projectId: "todoapp-ffdda",
    storageBucket: "todoapp-ffdda.appspot.com",
    messagingSenderId: "754074311111",
    appId: "1:754074311111:web:cab1cd126706a81f2b21e2",
    measurementId: "G-C02FQPHSMK"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);