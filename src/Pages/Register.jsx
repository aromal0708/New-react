import React from 'react'
import "./Styles.css"
import "../Media"
import { Avatar } from '../Media'
function Register() {


   
    

        
    



   


  return (
    <div className='formcontainer'>

        <div className='formwrapper'>
            <span className="logo"></span>
            <span className="title">Register</span>

            <form>
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Enter Email' />
                <input type="password" placeholder='Enter Password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                <img className='avatar' src={Avatar} alt="" />
                <span>Add an Avatar</span>
                </label>
                
                <button>Sign Up</button>
            </form>
            <p className='login'>Do You Have An Account? Login</p>
        </div>
      
    </div>
  )
}

export default Register
