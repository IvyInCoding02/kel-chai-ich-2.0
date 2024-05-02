import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

 

//Detect auth state
// onAuthStateChanged(auth, admin =>{
//     if(admin.email === "kelchaiich@gmail.com" && admin.password === "12345"){
//         console.log("Logged In") //Ideally admin dashboard should appear
//     }else{
//         console.log("You do not have admin access") //Or alert("You do not have admin access")
//     }
// })

export default  getFirestore(app);












/* Firebase Version 7 Configuaration */

// import firebase from 'firebase/app'; 
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyALGUSEWQf2kmYut5JhdRLZzjJQsFOhvZc",
//     authDomain: "kel-chai-ich.firebaseapp.com",
//     projectId: "kel-chai-ich",
//     storageBucket: "kel-chai-ich.appspot.com",
//     messagingSenderId: "1067890972728",
//     appId: "1:1067890972728:web:048eb8c83bb9277ca36ecd"
//   };

//   firebase.initializeApp(firebaseConfig);

//   export default firebase;