window.onload = initialize;

import { signUp } from './signup.js';
import { logIn } from './login.js';
import { checkIfUserLogged } from './login.js';
import { logOut } from './data.js';
import { upload } from './storage.js'


function initialize() {
  loadFirebase();
  if (document.getElementById("form-signup")) {
    signUp();
  }

  if (document.getElementById("form-login")) {
    checkIfUserLogged();
    logIn();
  }
  if (document.getElementById("logout")) {
    logOut();
  }
  if (document.getElementById("storage-form")) {
    upload();
  }

};

let loadFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyByq25yCwmSQB59_ZQ6-1xJ3ANX0xLpVOY",
    authDomain: "lnd-p-650cd.firebaseapp.com",
    databaseURL: "https://lnd-p-650cd.firebaseio.com",
    projectId: "lnd-p-650cd",
    storageBucket: "lnd-p-650cd.appspot.com",
    messagingSenderId: "319082157935",
    appId: "1:319082157935:web:491843aae0b81fd416fa9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
