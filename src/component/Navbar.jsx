import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
function Navbar() {
  return (
    <div className="navbar">

      <span className="logo">
        Texer
      </span>
      <div className="user">
        <img src="jii.jpg" />
        <span> hii</span>
        <button onClick={() => signOut(auth)}> logout</button>
      </div>
    </div>
  )
}

export default Navbar