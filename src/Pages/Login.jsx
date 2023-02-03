import React from 'react'
import "./Styles.css"

function Login() {
  return (
    <div className='formcontainer'>

    <div className='formwrapper'>
        <span className="logo"></span>
        <span className="title">Login</span>

        <form>


            <input type="email" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password' />
            
            
            <button>Login</button>
        </form>
        <p className='login' >Don't You Have An Account? Register </p>
    </div>
  
</div>
  )
}

export default Login
