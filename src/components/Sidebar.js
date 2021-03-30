import React, { useEffect, useState } from 'react';
import SidebarChat from './SidebarChat'
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import '../css/Sidebar.css';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, {auth} from '../backend/firebase';

function Sidebar() {
    let user=useSelector(selectUser);
    let [chats, setChats]=useState([]);

    useEffect(()=>{
        db.collection('chats').onSnapshot((snapshots)=>
            setChats(snapshots.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
            )
        );
    },[])

    let userSignOut=()=>{
        auth.signOut();
    };

    let addChat=()=>{
        let chatName=prompt('Please enter a chat name:');
        if(chatName){
            db.collection('chats').add({
                chatName:chatName,
            })
        }   
    }
    
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar onClick={userSignOut} src={user.photo} className='sidebar__avatar'/>
                <div className='sidebar__input'>
                    <SearchIcon/>
                    <input placeholder='Search'/>
                </div>

                <IconButton variant='outlined' onClick={addChat}className='sidebar__inputButton'>
                    <RateReviewOutlinedIcon />
                </IconButton>
                
            </div>

            <div className='sidebar__chats'>
                {chats.map(({id, data:{chatName}})=>(
                    <SidebarChat key={id} id={id} chatName={chatName}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
