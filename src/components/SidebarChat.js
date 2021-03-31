import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import * as timeago from 'timeago.js';
import {setChat} from '../features/chatSlice';
import {Avatar} from '@material-ui/core';
import db from '../backend/firebase';
import '../css/SidebarChat.css'

function SidebarChat({id, chatName}) {
    let dispatch=useDispatch();
    let [chatInfo, setChatInfo]=useState([]);

    useEffect(()=>{
        db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>(
            setChatInfo(snapshot.docs.map((doc)=> doc.data()))
        ))
    },[id])

    let changeRoom=()=>{
        dispatch(
            setChat({
                chatId:id,
                chatName:chatName
            })
        )
    }
    
    return (
        <div className='sidebarChat'>
            <Avatar src={chatInfo[0]?.photo}/>
            <div onClick={changeRoom} className='sidebarChat__info'>
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    )
}

export default SidebarChat
