import React from 'react'
import Dog from "../dog.jpg"
function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">

        <img src={Dog} aly=" Profile Photo" />
        <span> just now</span>
      </div>

      <div className="messageContent">
        <p>hello</p>
         <img src={Dog} aly=" " />

      </div>
    </div>
  )
}

export default Message