import React from 'react'
import { User} from '../Media'
import "../components/Components.scss";

function Search() {
  return (
    <div className='search' >
        <div className="searchForm">
            <input type="text" placeholder='Search' />
        </div>
      <div className="userChat">
        <img className='userImage' src={User} alt="" />
        <div className="userChatInfo">
            <span> Unknown</span>
        </div>
      </div>
    </div>
  )
}

export default Search

