import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";              
const auth = getAuth();

const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

const authForm = document.getElementById('auth-form');
const secretCont = document.getElementById('secretContent');

const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

secretCont.style.display = "none";

const userSignUp = async() => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    createUserWithEmailAndPassword(auth,signUpEmail, signUpPassword)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert("Your Acount creation is successful!");
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMsg = error.msg;
    alert("Error"+ errorMsg)
    console.log(errorCode + errorMsg); 
    })
}

const userSignIn = async() => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    signInWithEmailAndPassword(auth,signInEmail, signInPassword)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert("Signin SuccessFul Wohoo!");
    })
    .catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error"+ errorMessage)
    console.log(errorCode + errorMessage);
    })
}

const checkAuthState = async() => {
    onAuthStateChanged(auth,user => {
    if(user){
        authForm.style.display = "none";
        secretCont.style.display = "block";
        secretCont.style.background = "hotpink";
    } else{
        authForm.style.display = "block";
        secretCont.style.display = "none";
    }
  })
}

const userSignOut = async() =>{
await signOut(auth);
}
checkAuthState();

signUpBtn.addEventListener('click', userSignUp);
signInBtn.addEventListener('click',userSignIn);
signOutBtn.addEventListener('click',userSignOut);