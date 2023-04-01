function forgotpass(){
    const email=document.getElementById('email').value
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("Reset link sent to your Email ID")
  })
  .catch((error) => {
    document.getElementById("error").innerHTML = error.message
  });
}
