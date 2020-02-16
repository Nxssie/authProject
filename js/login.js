export let logIn = () => {
  document.getElementById("form-login").addEventListener("submit", doLogin);
};

let doLogin = event => {
  event.preventDefault();
    let formLogin = event.target;
    let email = formLogin.email.value;
    let password = formLogin.psw.value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
}

export let checkIfUserLogged = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user has logged in.")
      window.location.href = "data.html";
    } else {
      console.log("user has logged out.");
    }
  })
}
