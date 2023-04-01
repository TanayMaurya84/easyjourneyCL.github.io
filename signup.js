document.getElementById('signup').addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('Account Created')
    }
})
function signup(){
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}


