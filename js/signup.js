export let signUp = () => {
  document.getElementById("form-signup").addEventListener("submit", registerUser);
};

let registerUser = event => {
  event.preventDefault();

  let email = event.target.email.value;
  let psw = event.target.psw.value;

  firebase.auth().createUserWithEmailAndPassword(email, psw).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

};

