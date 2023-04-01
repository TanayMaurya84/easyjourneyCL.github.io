document.getElementById('signin').addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("logged in");
        location.replace('hellouser.html');
        
    }else{
        console.log("not logged in");
        
    }
})


function login(){
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}
