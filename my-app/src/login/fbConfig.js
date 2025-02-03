// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth }  from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEwCGMv8g-HTMZJIl5V4KCC8sARGuNlLw",
  authDomain: "car-washing-89214.firebaseapp.com",
  projectId: "car-washing-89214",
  storageBucket: "car-washing-89214.firebasestorage.app",
  messagingSenderId: "1053305453934",
  appId: "1:1053305453934:web:5ea27ea2ab43d91a79157f",
  measurementId: "G-XG619Y0CMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

