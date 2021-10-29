import initializeAuthintication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthintication()

const UseFirebase = () => {

const auth = getAuth();
const [user,setUser]=useState({})
  const [isLoading,setIsLoading]=useState(true)  

// googleLogInFunction
 const googleLogInFunction=()=>{
    setIsLoading(true)
    const provider = new GoogleAuthProvider();
   return signInWithPopup(auth, provider)
 
  setIsLoading(false)
  }


//   log out function


 const logoutFunction=()=>{
    signOut(auth).then(() => {
       setUser({})
    })
 }






 useEffect(()=>{
    setIsLoading(true)
  const unsubscribed=  onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } 
        setIsLoading(false)
      });
      return()=>unsubscribed
 },[])






















return{
    googleLogInFunction,
    logoutFunction,
    user,
    isLoading
}

};

export default UseFirebase;