// import * as firebase from "firebase/app";
// import 'firebase/firestore';
// import "firebase/auth";
// import {auth} from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCDLIQbz1M4KjxBpQ5bYBnzJDWDcwE4PiQ",
    authDomain: "clone-7e9eb.firebaseapp.com",
    databaseURL: "https://clone-7e9eb.firebaseio.com",
    projectId: "clone-7e9eb",
    storageBucket: "clone-7e9eb.appspot.com",
    messagingSenderId: "880296736539",
    appId: "1:880296736539:web:ee121e024693259cb1c5be",
    measurementId: "G-5YNCJQMZW4",
  });
  

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // Initialize Firebase

    //const db = firebaseApp.firestore();
 const auth = firebase.auth();

    export {auth};
