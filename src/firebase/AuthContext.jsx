import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import auth from "./firebase.config";




export const fireContext = createContext(null)

       const GProvider = new GoogleAuthProvider()

const AuthContext = ({children}) => {

    
    const [user, setUser] = useState(null)

    
    const createUser = (email, password) =>{
         
        return createUserWithEmailAndPassword( auth, email, password )


    }


    const signIn = (email, password) =>{

      return signInWithEmailAndPassword(auth, email, password)


    }


    const sGoogle = () =>{

      return signInWithPopup(auth,GProvider )

    }


    const logOut = ()=>{

      signOut(auth)

    }


    useEffect( ()=>{
       const unSubscribe = onAuthStateChanged(auth, current =>{
         setUser(current)
         console.log(current)
       })
       return()=>{
        unSubscribe()
       }
    } )





    const authInfo = { user,  createUser, signIn, sGoogle, logOut  }

    return (
        <div>

           <fireContext.Provider value={authInfo} >
             
             {children}

           </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;