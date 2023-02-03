import React from 'react'
import { User } from "../Media";
import "../components/Components.scss";
function Chats() {
  return (
    <div className='chats'>
      <div className="userChat">
        <img className='userImage' src={User} alt="" />
        <div className="userChatInfo">
            <span className='conversation' >Unknown </span>
            <p className='message'>Hello</p>
        </div>
      </div>


      <div className="userChat">
        <img className='userImage' src={User} alt="" />
        <div className="userChatInfo">
            <span className='conversation' > Unknown </span>
            <p className='message'>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img className='userImage' src={User} alt="" />
        <div className="userChatInfo">
            <span className='conversation' > Unknown </span>
            <p className='message'>Hello</p>
        </div>
        
      </div>

    </div>
  )
}

export default Chats
