// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUQlzc2_PeT8Oplay6KX3490RumQH7f9w",
  authDomain: "ai-pantry-tracker-78c7f.firebaseapp.com",
  projectId: "ai-pantry-tracker-78c7f",
  storageBucket: "ai-pantry-tracker-78c7f.appspot.com",
  messagingSenderId: "240839178760",
  appId: "1:240839178760:web:d97f8e25242aedc6faafbd",
  measurementId: "G-32PB168L0Q"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics if supported and on the client side
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    }
  });
}

export { app };