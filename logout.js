document.getElementById('logout').addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("signin.html")
    }else{
        document.getElementById("signedin").innerHTML="Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}
