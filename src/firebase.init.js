// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiGVI7TYoIu6B70JFzsCUJmUh-fvi0WKU",
    authDomain: "emajon-shop.firebaseapp.com",
    projectId: "emajon-shop",
    storageBucket: "emajon-shop.appspot.com",
    messagingSenderId: "266426922341",
    appId: "1:266426922341:web:80b4ff9661ba110761dd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;