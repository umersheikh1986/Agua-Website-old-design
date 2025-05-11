// import { initializeApp } from "firebase/app";
// import { createContext,useContext } from "react";
// import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

// const firebaseContext = createContext(null);

// const firebaseConfig = {
//   apiKey: "AIzaSyC878ImZRnfG6V3ebSZFvsDLuQLeFNqNAk",
//   authDomain: "agua-auth.firebaseapp.com",
//   projectId: "agua-auth",
//   storageBucket: "agua-auth.firebasestorage.app",
//   messagingSenderId: "881000845201",
//   appId: "1:881000845201:web:82c2f3543fd8d27a729430"
// };

// export const useFirebase = () => {
//   useContext(firebaseContext);
// }

// const appfire = initializeApp(firebaseConfig);
// const firebaseauth = getAuth(appfire);

// export const FirebaseProvider = (props) => {

// const signupuserwithemailandpass = (email,password) => {
//      createUserWithEmailAndPassword(firebaseauth,email,password);
// }

//        return (
//        <firebaseContext.Provider value={{ signupuserwithemailandpass }}>
//         {props.children}
//         </firebaseContext.Provider>
//         )
// }


// import { initializeApp } from "firebase/app";
// import { onAuthStateChanged } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC878ImZRnfG6V3ebSZFvsDLuQLeFNqNAk",
//   authDomain: "agua-auth.firebaseapp.com",
//   projectId: "agua-auth",
//   storageBucket: "agua-auth.firebasestorage.app",
//   messagingSenderId: "881000845201",
//   appId: "1:881000845201:web:82c2f3543fd8d27a729430"
// };

// const app = initializeApp(firebaseConfig);
// export default app;
