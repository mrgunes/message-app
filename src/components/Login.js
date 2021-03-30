import React from 'react';
import '../css/Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from '../backend/firebase'

function Login() {
    let signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>{console.log(error.message)});
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://www.freeiconspng.com/uploads/iphone-message-icon-png-22.png' alt='Message Logo'></img>
                <h1>Message</h1>
            </div>
            <Button onClick={signIn}>Sign In With Google</Button>
        </div>
    )
}

export default Login
