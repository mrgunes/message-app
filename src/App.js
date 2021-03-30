import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Message from './components/Message';
import {selectUser, login, logout} from './features/userSlice';
import Login from './components/Login';
import {auth} from './backend/firebase'

function App() {
  let user = useSelector(selectUser);
  let dispatch = useDispatch();
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      {user ? <Message /> : <Login/>}
    </div>
  );
}

export default App;
