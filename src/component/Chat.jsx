import React from 'react'
import Messages from './Messages'
import Input from './Input'
import More from '../more1.png'
function Chat() {
  return (
    <div className="chat">
     <div className="chatInfo">
      <span> Mosfet</span>
      <div className="chatIcon">
      <i class="fa-solid fa-video" ></i>
      <i class="fa-solid fa-user-plus"></i>
        <img src={More} alt="More" />
      </div>
     </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat