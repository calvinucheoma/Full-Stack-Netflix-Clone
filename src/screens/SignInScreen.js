import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignInScreen.css';

const SignInScreen = () => {

    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault();
        setLoading(true);
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
        setLoading(false);
    };

    const signIn = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message);
        });
        setLoading(false);
    };

  return (

    <div className = 'signInScreen'>

        <form>

            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type='submit' onClick={signIn} disabled={loading}> Sign In</button>
            <h4>
                <span className='signInScreen_gray'>New to Netflix? </span> 
                <span className='signInScreen_link' onClick={register} disabled={loading}>Sign Up now.</span>
            </h4>

        </form>
    </div>

  )

}

export default SignInScreen;