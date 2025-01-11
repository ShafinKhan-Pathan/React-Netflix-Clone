import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyChsmoO6IDp6es50bsj1A8IsUtS7tjiiPE",
  authDomain: "netflix-clone-6f729.firebaseapp.com",
  projectId: "netflix-clone-6f729",
  storageBucket: "netflix-clone-6f729.firebasestorage.app",
  messagingSenderId: "215254982111",
  appId: "1:215254982111:web:04f65f11e4c01b7353b86a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    // First we create user in firebase using the given method
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // Storing user details in firestore database
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
