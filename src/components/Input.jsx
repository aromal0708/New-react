import React from 'react'
import { Attachment } from "../Media";
import "../components/Components.scss"

function Input() {
  return (
    <div className='input'>
     <input className='messagebox' type="text" placeholder='Message Here' />
     <div className="send">
      
      <input type="file" style={{display:"none"}} id='file' />
      <label htmlFor="file">
        <img className='attachment' src={Attachment} alt="" />
      </label>
      <button className="Send" >Send</button>
     </div>
    </div>
  )
}

export default Input
