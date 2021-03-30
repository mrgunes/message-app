import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Message from './components/Message';
import {selectUser} from './features/userSlice'


function App() {
  let user = useSelector(selectUser)
  return (
    <div className="app">
      {user ? <Message /> : <Login/>}
      
    </div>
  );
}

export default App;
