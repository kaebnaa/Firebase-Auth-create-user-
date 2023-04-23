import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVM8l2Gk1hrkJ0hjagbuqN7YlaS-guqtM",
    authDomain: "fir-auth-1b613.firebaseapp.com",
    projectId: "fir-auth-1b613",
    storageBucket: "fir-auth-1b613.appspot.com",
    messagingSenderId: "230820981781",
    appId: "1:230820981781:web:8c2fc907f24c68fe83321c",
    measurementId: "G-4PB3Z5H8KS"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// get input and buttons

const email = document.querySelector('#mail');
const pass = document.querySelector('#pass');
const authForm = document.querySelector('#authForm');
const signUpBtn = document.querySelector('#signUpBtn');
const signInBTn = document.querySelector('#signInBtn');
const secret = document.querySelector('#secretContent');
const signOutBtn = document.querySelector("#signOutButton");
// secret in none
secret.style.display = "none";
// sign up function

const userSignUp = async() => {
    const signUpEmail = email.value;
    const signUpPassword = pass.value;

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Your account has been created!")
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage)
    })
}

signUpBtn.addEventListener('click', userSignUp)