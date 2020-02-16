export let logOut = () => {
  document.getElementById("logout").addEventListener("click", doLogOut);
}

let doLogOut = (event) => {
  console.log("El boton logout esta activo")
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href = "login.html";
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
  
}