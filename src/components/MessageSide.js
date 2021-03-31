import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import '../css/MessageSide.css'
import { selectUser } from '../features/userSlice';

let MessageSide= forwardRef(({id, contents:{timestamp, displayName, message, email, photo, uid}},ref)=>{

    let user=useSelector(selectUser)

    return (
        <div ref={ref} className={`messageSide ${user.email===email && 'messageSide__sender'}`}>
            <Avatar className='messageSide__photo' src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
})

export default MessageSide
