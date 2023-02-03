import React from 'react'
import { User } from '../Media'
import"../components/Components.scss"

function Message() {
  return (
    <div className="message owner">
      <div className="messageinfo">
         
         <img className='userImage' src={User} alt="" />
         <span>Just Now</span>
      </div>
      <div className="messagecontent">
       <p className='msg' >Hello</p>
       {/*<img className='imagecontent' src={User} alt=""></img>*/}
             
      </div>
    </div>
  )
}

export default Message
