import React from 'react'
import { User  } from '../Media';
import "../components/Components.scss"
function Navbar() {
  return (
    <div className='navbar'>
          <span className="Logo">2023 </span>
          <div className="user">
          <img className='userimage' src={User} alt="" />
          <span className='username'  >Aromal</span>
          <button className='Logout' >Log Out </button>

          </div>
    </div>
  )
}

export default Navbar
