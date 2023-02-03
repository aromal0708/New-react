import React from 'react'
import { User } from "../Media";
import "../components/Components.scss"
import Messages from './Messages';
import Input from './Input';
function Chat() {
  return (
    <div className='chat' >
      <div className="chatInfo">
        <img className='userImage' src={User} alt="" />
        <span className="chatname">Unknown</span>
              
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
