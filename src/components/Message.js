import React from 'react';
import '../css/Message.css';
import Sidebar from './Sidebar'

function Message() {
    return (
        <div className='message'>
            {/*Sidebar*/}
            <Sidebar />
            {/*Chatbar*/}
        </div>
    )
}

export default Message
