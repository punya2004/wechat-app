import React, { useEffect, useState }  from 'react';
import Login from "./Login";
import Hero from "./Hero";
import fire from './base';


function Auth() {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
  
    const clearInput = () => {
      setEmail('');
      setPassword('');
    }
  
    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
    }
  
    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code){
            case "auth/invalid-email":
            case "aith/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        })
    }
  
    const handleSignup = () => {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code){
            case "auth/invalid-email":
            case "aith/email-already-in-use":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        })
    }
  
    const handleLogout = () => {
      fire.auth().signOut();
    }
  
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInput();
          setUser(user)
        } else {
          setUser("")
        }
      })
    }
  
    useEffect(() => {
      authListener();
    },[])
    return (
        <div>
            {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
      )}                    
       </div>
    )
}

export default Auth
