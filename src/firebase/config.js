import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";


const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutFunction = () => {
  signOut(auth)
    .then(() => {
      console.log('Successfully logged out.')
    })
    .catch((error) => {
      // An error happened.
    });
};

export const signUpWithPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const email = user.email;
    // ...
    localStorage.setItem("name", email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export const signInWithPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const email = user.email;
    // ...
    localStorage.setItem("name", email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// connectAuthEmulator(auth, "http://localhost:9099")