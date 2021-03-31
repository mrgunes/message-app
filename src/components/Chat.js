import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
import {selectChatName, selectChatId} from '../features/chatSlice';
import {selectUser} from '../features/userSlice';
import db from '../backend/firebase';
import firebase from 'firebase';
import MessageSide from './MessageSide';
import {IconButton} from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import '../css/Chat.css'

function Chat() {
    let [input, setInput]=useState('');
    let [messages, setMessages]=useState([]);
    let chatName=useSelector(selectChatName);
    let chatId=useSelector(selectChatId);
    let user=useSelector(selectUser);

    useEffect(()=>{
        if(chatId){
           db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>(
               setMessages(snapshot.docs.map((doc)=>({
                   id:doc.id,
                   data:doc.data()
               })))
           )) 
        }
    },[chatId])

    let handleInput=(e)=>{
        setInput(e.target.value)
    }

    let sendMessage=(e)=>{
        e.preventDefault();  //page don't send itself
        db.collection('chats').doc(chatId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName,
        })

        setInput('')
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <h4>
                    To: <span className='chat__name'>{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            <div className='chat__message'>
                <FlipMove>
                    {messages.map(({id, data})=>(
                        <MessageSide key={id} contents={data}/>
                    ))}
                </FlipMove>
            </div>

            <div className='chat__input'>
                <form>
                    <input value={input} onChange={handleInput} placeholder='Message' type='text'/>
                    <button onClick={sendMessage}>Send Message</button> 
                </form>
                <IconButton>
                    <MicNoneIcon className='chat__mic'/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
