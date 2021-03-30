import React, {useState} from 'react';
import {IconButton} from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import '../css/Chat.css'

function Chat() {
    let [input, setInput]=useState('');

    let handleInput=(e)=>{
        setInput(e.target.value)
    }

    let sendMessage=(e)=>{
      e.preventDefault();  //page don't send itself
      setInput('')
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <h4>
                    To: <span className='chat__name'>Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            <div className='chat__message'>
                <MessageSide/>
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
